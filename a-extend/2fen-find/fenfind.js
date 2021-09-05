
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    const len = nums.length;
    let left = 0; 
    let right = len;
    // 由于nums[nums.length]会导致下标越界，所以从left到right构建的是一个[) 区域，此时left不能等于right。因为[right,right)是无效区间
    while (left < right) {
        let middle = left + ((right - left) >> 1); // 获取中间值
        if (target < nums[middle]) {
            // 中间值大于目标值，说明中间值在middle左边，缩小right的值，由于区间右侧不包含，所以新right=middle，无需+1，因为当前位置不会被二次比较
            right = middle;
        } else if (target === nums[middle]) {
            // 相等 middle即可
            return middle;
        } else {
            //目标值大于中间值，说明目标值在右边，需要扩大left的值。由于当前值不是目标值，所以left=middle+1,避免重复比较middle位置。
            left = middle + 1;
        }
    }
    // 当while循环完(此时left=right)还没有拿到目标值，说明目标值在[left,right)之外，此时返回right即可
    return right;
};
