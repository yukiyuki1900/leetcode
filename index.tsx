import { Modal, Button, Dropdown, Menu, message, Input, Badge, Table, Tag } from 'antd'

import { history, useAccess, Access, useModel } from 'umi'
import { stringify } from 'querystring'
import React, { useState, useRef, useEffect, useMemo } from 'react'
import { PageContainer } from '@ant-design/pro-layout'
import type { ActionType, ColumnsState } from '@ant-design/pro-table'
import ProTable from '@ant-design/pro-table'
import type { DensitySize } from '@ant-design/pro-table/lib/components/ToolBar/DensityIcon'
import {
  DownOutlined,
  PlusCircleOutlined,
  InfoCircleOutlined,
  MinusCircleTwoTone,
  PlusCircleTwoTone,
} from '@ant-design/icons'
import * as moment from 'moment'
import { countStrToBit, getUrlsub } from '@/utils/utils'
import { StatusStep, TypesValueMap } from '@/consts/contentPools'
import type { TableListItem, TableListParams } from '@/typescripts/contentPools'

import {
  queryMenus,
  queryContentPool,
  addContent,
  updateContent,
  approContentStatus,
  reviewContents,
  dispatchContent,
  switchContent,
} from '@/services/contentPools'
import { isChannelPool, isOriginalPool, buildColumns } from './columns'
import EditForm from './components/EditForm'
import DenyModal from './components/DenyModal'
import DispatchModal from './components/DispatchModal'
import BatchUploaderr from './components/BatchUploader'
import styles from './styles.less'
import type { ExpandableConfig, SortOrder } from 'antd/lib/table/interface'
import type { ToolBarProps } from '@ant-design/pro-table/lib/components/ToolBar'
import type { SearchConfig } from '@ant-design/pro-table/lib/components/Form/FormRender'

const TableList: React.FC<any> = props => {
  const {
    match: {
      params: { pool: menuID, poolchannel },
    },
  } = props
  const { commonState, setMenu, setPool } = useModel('common', model => ({
    commonState: model.commonState,
    setMenu: model.setMenu,
    setPool: model.setPool,
  }))
  const { initialState } = useModel('@@initialState')
  const [tableSize, setTableSize] = useState<DensitySize>('small')
  const [expandedRowKeys, setExpandedRowKeys] = useState<string[]>([])
  const [editModalVisible, handleModalVisible] = useState<boolean>(false)
  const [feedIDEditable, handleFeedIDEditable] = useState<number>(0)
  const [approvalModalVisible, handleApprovalVisible] = useState<boolean>(false)
  const [denyModalVisible, handleDenyVisible] = useState<boolean>(false)
  const [dispatchModalVisible, handleDispatchVisible] = useState<boolean>(false)
  const [switchModalVisible, handleSwitchVisible] = useState<boolean>(false)
  const [switchFeedID, setSwitchFeedID] = useState<string>('')
  const [switchLoading, setSwitchLoading] = useState<boolean>(false)
  const [contentStatus, setContentStatus] = useState<string>('1')
  const [opFeedList, setFeedList] = useState<TableListItem[]>([])
  const [curRecord, setCurRecord] = useState<any>(null)
  const actionRef = useRef<ActionType>()
  const [columnsStateMap, setColumnsStateMap] = useState<Record<string, ColumnsState>>({})
  const [myCount, setMyCount] = useState<number>(0)
  const [noOwnerCount, setNoOwnerCount] = useState<number>(0)
  const [opsName, setOpsName] = useState<string>('review')
  const [reviewModalVisible, setReviewModalVisible] = useState<boolean>(false)
  const [editAction, setEditAction] = useState<boolean>(false) // 设置是否从edit传递过来的操作
  const access = useAccess()

  const allowMultiMaterial = useMemo(() => {
    return (
      !!poolchannel &&
      !!initialState &&
      initialState.multiMaterialChannel.indexOf(poolchannel) !== -1
    )
  }, [initialState, poolchannel])

  // 菜单初始化检查
  useEffect(() => {
    if (commonState.menuList.length === 0) {
      queryMenus().then(res => {
        setMenu(res.menu)
        setPool(res.poolsInfo)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commonState.menuList.length])

  // 编辑框状态订阅
  useEffect(() => {
    handleFeedIDEditable(curRecord && curRecord.key ? curRecord.key : 0)
  }, [curRecord])

  // tab页订阅
  useEffect(() => {
    setColumnsStateMap({
      text: {
        show: menuID === 'wechat-plugin-personalise' || menuID === 'wechat-plugin-toplevel',
      },
      wenan: {
        show: menuID === 'wechat-plugin-personalise' || menuID === 'wechat-plugin-toplevel',
      },
      guide: {
        show: false,
      },
      textChainGuide: {
        show: false,
      },
      modifyUser: {
        show: false,
      },
      createUser: {
        show: false,
      },
      oplogs: {
        show: true,
      },
      status: {
        show: contentStatus === '0' || contentStatus === '100',
      },
      reason: {
        show: contentStatus === '0' || contentStatus === '100',
      },
      owner: {
        show: contentStatus === '1' && !isOriginalPool(menuID),
      },
    })
    if (actionRef.current && actionRef.current.reloadAndRest) {
      actionRef.current.reloadAndRest()
    }
  }, [contentStatus, menuID])

  /**
   * 添加节点
   * @param fields
   */
  const handleUpsert = async (data: TableListParams, deleteList?: Partial<TableListItem>[]) => {
    let infoKey = ''
    let toCallFunc: (params: any) => Promise<any>
    if (feedIDEditable === 0) {
      infoKey = '添加'
      toCallFunc = addContent
    } else {
      infoKey = '更新'
      toCallFunc = updateContent
    }
    const hide = message.loading(`正在${infoKey}`)
    const params: any = { key: feedIDEditable }
    Object.keys(data).forEach(key => {
      if (typeof data[key] === 'string') {
        if (key !== 'type') {
          params[key] = data[key].trim()
        } else {
          params[key] = parseInt(data[key], 10)
        }
      } else {
        params[key] = data[key]
      }
    })
    if (deleteList) {
      params.deleteList = deleteList
    }
    try {
      const res = await toCallFunc(params)
      if (res.ok) {
        message.success(`${infoKey}成功`)
      }
      hide()
      return res
    } catch (error) {
      hide()
      message.error(`${infoKey}失败请重试！`)
      return false
    }
  }

  // editContent 开始编辑modal
  const editContent = (record: TableListItem) => () => {
    handleModalVisible(true)
    setCurRecord(record)
  }

  // formatRequestParams 数据请求格式化
  const formatRequestParams = (params: TableListParams) => {
    const reqOption: TableListParams = params
    if (params.types && params.types.length !== 0) {
      const typeArr = params.types.toString().split(',')
      const typeNumArr: string[] = []
      typeArr.forEach((category: string) => {
        typeNumArr.push(`${TypesValueMap[category]}`)
      })
      reqOption.types = typeNumArr.toString()
    }
    if (params.createStartTime && params.createEndTime) {
      const startStr = moment(params.createStartTime).format('YYYY-MM-DD HH')
      const endStr = moment(params.createEndTime).format('YYYY-MM-DD HH')
      reqOption.createStartTime = moment(startStr).valueOf()
      reqOption.createEndTime = moment(endStr).valueOf()
    }
    if (params.startTime) {
      reqOption.startTime = moment(params.startTime).valueOf()
    }
    if (params.endTime) {
      reqOption.endTime = moment(params.endTime).valueOf()
    }
    if (params.firstAuditStartTime) {
      reqOption.firstAuditStartTime = moment(params.firstAuditStartTime).valueOf()
    }
    if (params.firstAuditEndTime) {
      reqOption.firstAuditEndTime = moment(params.firstAuditEndTime).valueOf()
    }
    return reqOption
  }

  const submitContent = async (value: any, deleteList?: any[]) => {
    if (!access.poolsSave) {
      message.error('对不起，您暂无保存权限')
      return
    }
    const formValObj = value
    const res = await handleUpsert(formValObj, deleteList)
    if (res.ok) {
      // 点击审批通过按钮
      if (editAction) {
        setFeedList([{ ...res.data }])
        setEditAction(false)
        handleApprovalVisible(true)
      }
      setCurRecord(undefined);
      handleModalVisible(false)
      if (actionRef.current) {
        actionRef.current.reload()
      }
    }
  }

  // handleDeny 拒绝
  const handleDeny = () => {
    setFeedList([{ ...curRecord }])
    handleModalVisible(false)
    handleDenyVisible(true)
  }

  // handleExport 导出
  const handleExport = (params: TableListParams) => {
    const url = `/api/pools/download/${getUrlsub(history.location.pathname)}?${stringify({
      ...(formatRequestParams(params) as any),
      status: contentStatus,
    })}`
    window.open(url)
  }

  // feedStates feed编辑直接相关属性
  const feedStates = {
    menuID,
    feedIDEditable,
    contentStatus,
    commonState,
    editContent,
    setFeedList,
    handleSwitchVisible,
    handleApprovalVisible,
    handleDenyVisible,
    handleDispatchVisible,
  }

  // searchProps pro-table 搜索属性
  const searchProps: SearchConfig = {
    defaultCollapsed: true,
    optionRender: ({ searchText, resetText }, { form }) => [
      <Button
        key="search"
        type="primary"
        onClick={() => {
          form?.submit()
        }}
      >
        {searchText}
      </Button>,
      <Button
        key="rest"
        onClick={() => {
          form?.resetFields()
        }}
      >
        {resetText}
      </Button>,
      <Access key="out-access" accessible={access.poolsExport}>
        <Button
          key="out"
          onClick={() => {
            const params: TableListParams = form?.getFieldsValue()
            Object.keys(params).forEach(key => params[key] == null && delete params[key])
            handleExport(params)
          }}
        >
          导出
        </Button>
      </Access>,
    ],
  }

  // renderTabList pro-table tab属性
  const renderTabList = () => {
    if (!isOriginalPool(menuID)) {
      let curStatus = [...StatusStep]
      if (isChannelPool(menuID)) {
        curStatus = curStatus.filter(i => i.key !== '1-2')
      }
      const newProps: { key: string; tab: React.ReactNode }[] = curStatus.map(
        (item: { key: string; tab: string }) => {
          if (item.key.indexOf('-') === -1) {
            return item
          }
          const firstStatus = item.key.split('-')[1]
          return {
            key: item.key,
            tab: (
              <Badge
                offset={[8, -10]}
                overflowCount={10000}
                size="small"
                count={firstStatus !== '1' ? myCount : noOwnerCount}
                key={item.key}
              >
                {item.tab}
              </Badge>
            ),
          }
        },
      )
      return newProps
    }
    return undefined
  }

  // toolbar 工具栏
  const toolbar: ToolBarProps<TableListItem>['toolBarRender'] | false = isOriginalPool(menuID)
    ? false
    : (action, { selectedRows }) => [
        <Access key="new-button-access" accessible={access.poolsNew && !isChannelPool(menuID)}>
          <Button
            key="new-button"
            type="primary"
            onClick={() => {
              setCurRecord(undefined)
              handleModalVisible(true)
            }}
          >
            <PlusCircleOutlined /> 新建
          </Button>
        </Access>,
        <Access
          key="dropdown-key-access"
          accessible={contentStatus !== '100' && access.poolsDispatch}
        >
          <Dropdown
            key="dropdown-key"
            overlay={
              <Menu
                onClick={async e => {
                  setFeedList(selectedRows ? selectedRows.map(item => ({ ...item })) : [])
                  if (e.key === 'approval') {
                    handleApprovalVisible(true)
                  } else if (e.key === 'deny') {
                    handleDenyVisible(true)
                  } else if (e.key === 'dispatch') {
                    handleDispatchVisible(true)
                  } else if (e.key === 'review' || e.key === 'drop') {
                    setReviewModalVisible(true)
                    setOpsName(e.key)
                  }
                }}
                selectedKeys={[]}
              >
                {contentStatus === '1-2' && access.poolsAudit ? (
                  <Menu.Item key="approval">批量通过</Menu.Item>
                ) : null}
                {contentStatus !== '100' &&
                contentStatus !== '0' &&
                contentStatus !== '2' &&
                access.poolsDeny ? (
                  <Menu.Item key="deny">批量拒绝</Menu.Item>
                ) : null}
                <Menu.Item key="dispatch">批量派发</Menu.Item>
                {contentStatus === '1-1' && !isChannelPool(menuID) ? (
                  <Menu.Item key="review">批量领取审核任务</Menu.Item>
                ) : null}
                {contentStatus === '1-2' ? (
                  <Menu.Item key="drop">批量释放审核任务</Menu.Item>
                ) : null}
              </Menu>
            }
          >
            <Button>
              批量操作 <DownOutlined />
            </Button>
          </Dropdown>
        </Access>,
      ]

  // expandProps  扩展属性
  const expandProps: ExpandableConfig<TableListItem> = allowMultiMaterial
    ? {
        expandedRowKeys,
        columnWidth: '14px',
        expandIcon: ({ expanded, onExpand, record }) =>
          expanded ? (
            <MinusCircleTwoTone onClick={e => onExpand(record, e)} />
          ) : (
            <PlusCircleTwoTone onClick={e => onExpand(record, e)} />
          ),
        onExpand: (expand: boolean, record: TableListItem) => {
          const keysSet = new Set(expandedRowKeys)
          if (expand) {
            keysSet.add(record.key)
          } else {
            keysSet.delete(record.key)
          }
          setExpandedRowKeys(Array.from(keysSet))
        },
        expandedRowRender: (
          record: TableListItem,
          index: number,
          indent: number,
          expanded: boolean,
        ) => {
          if (!expanded || !record.subtitles || !record.subtitles.length) {
            return null
          }
          return (
            <Table
              size="small"
              showHeader={true}
              dataSource={record.subtitles as TableListItem[]}
              pagination={false}
              // tableLayout="auto"
              // scroll={{ x: 1600 }}
              columns={[
                {
                  title: '子标题素材ID',
                  key: 'material_id',
                  dataIndex: 'material_id',
                  width: '300px',
                },
                {
                  title: '标题',
                  key: 'title',
                  dataIndex: 'title',
                  render: (_: React.ReactNode, data: TableListItem) => (
                    <>
                      <a onClick={editContent(record)}>{data.title}</a>
                      <Tag color="magenta">{countStrToBit(data.title || '')}</Tag>
                    </>
                  ),
                },
                {
                  title: '',
                  dataIndex: 'option',
                  className: 'optionWrap',
                  width: '54px',
                  fixed: 'right',
                },
              ]}
            />
          )
        },
      }
    : {}

  // tableRequest table数据源
  const tableRequest = async (
    params: TableListParams,
    sorter: Record<string, SortOrder>,
    filter: Record<string, React.ReactText[]>,
  ) => {
    const options: TableListParams = formatRequestParams(params)
    const newOptions: TableListParams = {
      filter,
      ...options,
    }
    // 全部和驳回允许指定查询
    if (isOriginalPool(menuID)) {
      // 总池状态查全量
      newOptions.status = '100'
      newOptions.checkOwner = false
      newOptions.withOwner = undefined
    } else if (contentStatus === '100' || contentStatus === '0') {
      newOptions.status = options.status || contentStatus
    } else if (contentStatus.indexOf('-') !== -1) {
      // 一审待审认领查询
      const status = contentStatus.split('-')[0]
      const firstStatus = contentStatus.split('-')[1]
      newOptions.status = status
      newOptions.checkOwner = true
      newOptions.withOwner = firstStatus !== '1' ? initialState?.currentUser.name : 'notOccupied'
    } else {
      // 一审全量认领人逻辑
      if (contentStatus === '1' && newOptions.firstAuditOwner) {
        newOptions.withOwner = newOptions.firstAuditOwner.trim()
        if (newOptions.withOwner) {
          newOptions.checkOwner = true
        }
      }
      // 其他状态
      newOptions.status = contentStatus
    }
    const res = await queryContentPool(newOptions)
    setMyCount(res.myCount)
    setNoOwnerCount(res.noOwnerCount)
    setExpandedRowKeys(
      res.data.filter(item => item.subtitles && item.subtitles.length).map(item => item.key),
    )
    return res
  }

  return (
    <PageContainer
      breadcrumb={undefined}
      className={styles.contentTable}
      tabList={renderTabList()}
      tabActiveKey={contentStatus}
      onTabChange={key => {
        setContentStatus(key)
      }}
    >
      {/* 内容列表 */}
      <ProTable<TableListItem, TableListItem>
        size={tableSize}
        onSizeChange={size => {
          setTableSize(size)
        }}
        tableLayout="auto"
        scroll={{ x: 1600 }}
        options={{ fullScreen: false, reload: true, setting: true }}
        columnsStateMap={columnsStateMap}
        onColumnsStateChange={map => setColumnsStateMap(map)}
        headerTitle={isChannelPool(menuID) ? <BatchUploaderr menuID={menuID} /> : '内容清单'}
        actionRef={actionRef}
        rowKey="key"
        form={{ requiredMark: false }}
        toolBarRender={toolbar}
        tableAlertRender={({ selectedRowKeys }) => (
          <div>
            已选择 <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项&nbsp;&nbsp;
          </div>
        )}
        request={tableRequest}
        columns={buildColumns('search', access, feedStates)}
        expandable={expandProps}
        search={searchProps}
        rowSelection={{}}
      />

      {/* 内容编辑 modal */}
      <EditForm
        curRecord={curRecord}
        tabStatus={contentStatus}
        access={access}
        allowMultiMaterial={allowMultiMaterial}
        editAction={editAction}
        onSave={submitContent}
        onPassSet={(b: boolean) => setEditAction(b)}
        onDeny={handleDeny}
        onCancel={() => {
          setCurRecord(undefined)
          handleModalVisible(false)
        }}
        handleSwitchVisible={handleSwitchVisible}
        modalVisible={editModalVisible}
      />

      {/* 审核通过modal */}
      <Modal
        visible={approvalModalVisible}
        title="审核通过"
        mask
        maskClosable
        onOk={() => {
          const versionMap = {}
          const feedIDs = opFeedList.map(item => {
            versionMap[item.feedID] = item.version
            return item.feedID
          })
          let curStatus = opFeedList[0].status
          if (typeof curStatus === 'string') {
            curStatus = parseInt(curStatus, 10)
          }
          curStatus += 1
          approContentStatus(feedIDs, curStatus, versionMap, '').then(() => {
            actionRef?.current?.reload()
            actionRef?.current?.clearSelected()
            handleApprovalVisible(false)
          })
        }}
        onCancel={() => handleApprovalVisible(false)}
      >
        确认要「通过」选中的内容吗？
      </Modal>

      {/* 领取或放弃审核任务modal */}
      <Modal
        visible={reviewModalVisible}
        title={opsName === 'review' ? '批量领取审核任务' : '批量释放审核任务'}
        mask
        maskClosable
        onOk={() => {
          const feedIDs = opFeedList.map(item => {
            return item.feedID
          })
          reviewContents(feedIDs, menuID, opsName).then(res => {
            actionRef?.current?.reload()
            actionRef.current.clearSelected()
            setReviewModalVisible(false)
            if (res.data.failed && res.data.failed.length > 0) {
              res.data.failed.forEach(msg => {
                message.error(msg, 8)
              })
            }
          })
        }}
        onCancel={() => setReviewModalVisible(false)}
      >
        确认要 {opsName === 'review' ? '「领取」' : '「释放」'}选中的任务吗？
      </Modal>

      {/* 审核拒绝modal */}
      <DenyModal
        modalVisible={denyModalVisible}
        onSubmit={(reason: string) => {
          const versionMap = {}
          const feedIDs = opFeedList.map(item => {
            versionMap[item.feedID] = item.version
            return item.feedID
          })
          let curStatus = opFeedList[0].status
          if (typeof curStatus === 'string') {
            curStatus = parseInt(curStatus, 10)
          }
          approContentStatus(feedIDs, -curStatus, versionMap, reason).then(() => {
            actionRef?.current?.reload()
            handleDenyVisible(false)
            actionRef?.current?.clearSelected()
          })
        }}
        onCancel={() => handleDenyVisible(false)}
      />

      {/* 分发内容modal */}
      <DispatchModal
        visible={dispatchModalVisible}
        menuData={commonState.menuList}
        onSubmit={(keys: React.ReactText[]) => {
          const ret = dispatchContent({
            feedIDs: opFeedList.map(i => i.feedID),
            targetPools: keys as string[],
          })
          const hide = message.loading('正在派发...')
          ret
            .then(res => {
              if (res.data) {
                if (res.code !== 0) {
                  message.error(res.data)
                } else {
                  message.success('派发成功')
                  actionRef.current.clearSelected()
                }
                actionRef?.current?.reload()
                handleDispatchVisible(false)
              } else {
                message.error('服务通信异常')
              }
            })
            .finally(() => {
              hide()
            })
          return ret
        }}
        onCancel={() => handleDispatchVisible(false)}
      />

      {/* 替换feed确认modal */}
      <Modal
        title={
          <>
            <InfoCircleOutlined
              style={{ color: 'red', fontSize: '20px', verticalAlign: 'text-top' }}
            />
            &nbsp;&nbsp; 替换FeedID操作
          </>
        }
        confirmLoading={switchLoading}
        visible={switchModalVisible}
        onOk={() => {
          if (!switchFeedID || typeof switchFeedID !== 'string') {
            message.error('请输入正确的feedID')
            return
          }
          const dstFeedID = switchFeedID.trim()
          if (!dstFeedID) {
            message.error('请输入正确的feedID')
            return
          }
          const payload = { srcFeedID: curRecord ? curRecord.feedID : '', dstFeedID }
          setSwitchLoading(true)
          switchContent(payload)
            .then(({ ok }) => {
              if (ok) {
                handleSwitchVisible(false)
                handleModalVisible(false)
                setSwitchFeedID('')
                if (actionRef.current && actionRef.current.reloadAndRest) {
                  actionRef.current.reloadAndRest()
                }
              }
            })
            .finally(() => setSwitchLoading(false))
        }}
        onCancel={() => {
          handleSwitchVisible(false)
          setSwitchFeedID('')
        }}
      >
        <p style={{ color: 'red' }}>
          替换FeedID是高危操作，请慎重执行，一经替换，无法换回。
          <br />
          如果您确认要替换，请填入新的FeedID，提交后所有内容池内具有相同的原始FeedID的内容都将被替换，列表将自动刷新。
        </p>
        <Input value={switchFeedID} onChange={e => setSwitchFeedID(e.target.value)} />
      </Modal>
    </PageContainer>
  )
}

export default TableList
