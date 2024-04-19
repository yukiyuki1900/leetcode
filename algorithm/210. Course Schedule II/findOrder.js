/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const visit = new Array(numCourses).fill(0);
    const edges = [];
    const res = [];

    for (let i = 0 ; i < prerequisites.length ; i ++) {
        const prereq = prerequisites[i];
        if (!edges[prereq[1]]) {
            edges[prereq[1]] = [];
        }
        edges[prereq[1]].push(prereq[0]);
    }

    for (let i = 0 ; i < numCourses ; i ++) {
        if (!visit[i]) {
            dfs(i, visit, edges, res);
        }
    }
    return res.length < numCourses ? [] : res.reverse();
};

const dfs = (num, visit, edges,res) => {
    visit[num] = 1;
    const edge = edges[num] || [];

    for (let i = 0 , len = edge.length ; i < len ; i ++) {
        if (visit[edge[i]] === 0) {
            dfs(edge[i], visit, edges, res);
        } else if (visit[edge[i]] === 1) {
            return;
        }
    }

    res.push(num);
    visit[num] = 2;
};