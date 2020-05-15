
function bozoSort(arr) {
  var array = JSON.parse(JSON.stringify(arr)); // 不改变传进来的数据
  var n = 0; // 计数
  var isSort = false; // 判断是否排序完毕
  function randomSort() {
    let i = 0;
    while (i < array.length) {
      var j = Math.floor(Math.random() * array.length); // 模拟生成随机下标
      [array[i], array[j]] = [array[j], array[i]]; // 根据随机下标的元素进行交换
      i++
      n++;
    }
  }
  function toSort() { // 判断数组是否排序完成
    let i = 0;
    while (i < array.length) {
      if (array[i] > array[i - 1]) {
        return false;
      }
      i++
    }
    return true;
  }
  while (isSort == false) {
    randomSort(array);// 递归排序
    isSort = toSort(array);
  }
  console.log('已经执行' + n + '次')
  return array;
}
