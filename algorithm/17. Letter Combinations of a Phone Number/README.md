#17. Letter Combinations of a Phone Number


这道题关键要做3个遍历循环

1、输入2，代表"abc"

已有排列中只有字符串""，所以得到{"a","b","c"}

2、输入3，代表"def"

(1)对于排列中的首元素"a"，删除"a"，并分别加入'd','e','f'，得到{"b","c","ad","ae","af"}

(2)对于排列中的首元素"b"，删除"b"，并分别加入'd','e','f'，得到{"c","ad","ae","af","bd","be","bf"}

(2)对于排列中的首元素"c"，删除"c"，并分别加入'd','e','f'，得到{"ad","ae","af","bd","be","bf","cd","ce","cf"}

注意

（1）每次添加新字母时，应该先取出现有ret当前的size()，而不是每次都在循环中调用ret.length，因为ret.length是不断增长的。

（2）删除vector首元素代码为：
            ret.shift(0);