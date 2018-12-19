function SortList(array) {
  console.log("排序前:" + array);
  // 声明函数swap函数，用于交换
  var swap = function(index1, index2){
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };
  // 冒泡排序
  this.bubbleSort = function(){
    var length = array.length;
    for (var i = 0; i < length; i++){
      for (var j = 0;j < length-1; j++){
        if (array[j] > array[j+1]){
          swap(j, j+1);
        }
      }
    }
    console.log("冒泡排序后:" + array);
  };
}
// 生成冒泡排序对象
var bubbleSort = new SortList([10,9,8,7,6,5,4,3,2,1]);
bubbleSort.bubbleSort();
