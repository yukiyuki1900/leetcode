#278. First Bad Version

基本的二分法

需要注意的是取中间值时 不要用(low+high)/2，会引起溢出超时，要用low+(high-low)/2