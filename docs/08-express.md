# 选择排序、桶排序、冒泡排序和快速排序

### 选择排序

#### 原理

选择排序从数组内遍历出最大值，加入新数组，将最大值从原数组中删除，重复上述操作，最后得出的新数组就是一个从大到小排序的数组了。

#### 代码实现

```
/**
 * params {number[]} list
 * return {number[]}
 */
function sort(list) {
  list = [...list]; // 最好不要对元素组操作
  const newList = []; // 创建待返回的空数组
  while(list.length) { // 当 list.length === 0 时，表示处理完毕
    let min = Infinity; // 设最小值无穷大 或者 等于 list 中的任意位置都可
    let minIndex; // 记录下最小值下标
    list.forEach((el, index) => { // 对 list 循环，查找当前 list 最小值
      if(el < min) {
        min = el;
        minIndex = index;
      }
    });
    newList.push(list[minIndex]); // 将 最小值下标 对应的值 push 进数组
    list.splice(minIndex, 1); // 从list内删除这个值
  }
  return newList
}
复制代码
```

#### 优劣

优点：

- 上手比较简单，比较符合人的正常思路逻辑。

缺点：

- 时间复杂度O(n^2)，运算速度很慢，当数组元素个数比较多时，时间增速惊人。

------

### 桶排序

#### 原理

桶排序顾名思义，就是准备好一些“桶”，然后将待排序的数组值一个个放入对应的“桶内”，全部元素放入”桶“后，然后展开”桶“就得到了排序完成的数组了。比如：当前需要排序的数组 [8, 3, 5, 9, 2, 3, 0, 8]，我们可以准备一个长度为10的数组，每一项的值为0，我们对需要排序的数组开始便利，当我们遇到8时，我们将newList[8]内的0，加1，改成1；然后下一个3，我们将newList[3]内的0，加1，改成1...，处理完所有元素后，将newList便利输出就得到了排序好的数组了。当然了这里只是简单的对桶排序的介绍，真正的桶排序肯定比这个复杂。

#### 代码实现

```
const list = [8, 3, 5, 9, 2, 3, 0, 8]; // 待排序数组

/**
 * params {number[]} list
 * return {number[]}
 */
function sort(list) {
  const newList = Array.from({length: 10}).fill(0); // 创建 [0, 0, ..., 0] 的数组，长度为10
  list.forEach(el => newList[el] += 1); // 把数组元素记录在 newList 上
  return newList.reduce((pre, el, index) => { // 展开数组
    for(let i = el; i; i--) {
      pre.push(index)
    }
    return pre;
  }, [])
}
复制代码
```

#### 优劣

优点：

- 时间复杂度只有O(m+n)，计算效率高

缺点：

- 空间消耗比较大
- 需要提前知道最大值，最小值

------

### 冒泡排序

#### 原理

冒泡排序我先介绍说它的原理，你就明白它为什么叫冒泡排序了。有一个待排序的数组 [8, 3, 5, 9, 2, 3, 0, 8] ，需要由小到大排序。我们只需要把小的放在左边，大的放右边是不是就完成了排序呢？显然是的。将第一个 8 与 第二位 3 比较，8 大于 3，所以我们把8往右放，即将 8 与 3 更换位置，更换后的数组是 [**3**, **8**, 5, 9, 2, 3, 0, 8] ，继续比较改变后的数组第二位 8 与 第三位 5 比较，8 大于 5，更换后的数组是 [3, **5**, **8**, 9, 2, 3, 0, 8]，重复这样的操作，如果遇到相同或者当前数值小于后一位的则不需要改变，继续比较下一位即可。所以看这 8 的移动轨迹，像不像是一个气泡在往上冒，所以这个排序方法就叫冒泡排序。

#### 代码实现

```
/**
 * params {number[]} list
 * return {number[]}
 */
function sort(list) {
  list = [...list];
  let length = list.length;
  while(length--) {
    for(let i = 0; i < length; i++) {
      const current = list[i];
      const next = list[i + 1];
      if(current > next) {
        [list[i], list[i + 1]] = [next, current];
      }
    }
  }
  return list;
}
复制代码
```

#### 优劣

优点：

- 没啥优点吧，我不清楚哈，欢迎赐教。

缺点：

- 时间复杂度O(n^2)，计算慢。

------

### 快速排序

> 中心思想是用二分实现的快速排序，能够很快的完成排序任务，也是我比较推荐的一种排序方式。

#### 原理

快速排序的优点就是速度快，为什么速度快呢？我先介绍一下快速排序的原理。选择一个基准值，一般选择数组的一个值，遍历数组，大的放右边，小的放左边，一样大的放中间（哈哈哈哈哈😀），利用递归重复对大的数组和小的数组进行拆分，最后得出排序后的数组。

#### 代码实现

```
function quickSort(arr) {
  if(arr.length < 2) {
    return arr;
  } else {
    const pivot = arr[0]; // 基准值
    const pivotArr = []; // 一样大的放中间
    const lowArr= []; // 小的放左边
    const hightArr = []; // 大的放右边
    arr.forEach(current => {
      if(current === pivot) pivotArr.push(current);
      else if(current > pivot) hightArr.push(current);
      else lowArr.push(current);
    })
    return quickSort(lowArr).concat(pivotArr).concat(quickSort(hightArr));
  }
}
复制代码
```

#### 优劣

优点：

- 速度快，O(n*log n)

缺点：

- 