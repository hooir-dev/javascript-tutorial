# js常用函数

## 防抖

```javascript
function debounce(fn) {
    let timeout = null; // 创建一个标记用来存放定时器的返回值
    return function () {
        clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
        timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
            console.log(this, arguments)
            fn.apply(this, arguments);
        }, 500);
    };
}
function sayHi() {
  console.log('防抖成功');
}

var inp = document.getElementById('inp');
inp.addEventListener('input', debounce(sayHi)); // 防抖
```





## 节流

```javascript
function throttle(fn) {
    let canRun = true; // 通过闭包保存一个标记
    return function () {
        if (!canRun) return; // 在函数开头判断标记是否为 true，不为 true 则 return
        canRun = false; // 立即设置为 false
        setTimeout(() => { // 将外部传入的函数的执行放在 setTimeout 中
            fn.apply(this, arguments);
            // 最后在 setTimeout 执行完毕后再把标记设置为 true(关键) 表示可以执行下一次循环了。当定时器没有执行的时候标记永远是 false，在开头被 return 掉
            canRun = true;
        }, 5000);
    };
}
function sayHi(e) {
    console.log(e.target.innerWidth, e.target.innerHeight);
}
window.addEventListener('resize', throttle(sayHi));
```



## 数组转换为树结构

```javascript
let data = [
    { id: 1, text: 't11', parentId: 0 },
    { id: 2, text: 't11', parentId: 0 },
    { id: 3, text: 't11', parentId: 1 },
    { id: 4, text: 't11', parentId: 1 },
    { id: 5, text: 't11', parentId: 3 },
    { id: 6, text: 't11', parentId: 2 }
]
function treeData (data, id, parentId, childName) {
    let cloneData = JSON.parse(JSON.stringify(data))
    return cloneData.filter((father) => {
        let newArr = cloneData.filter((child) => {
            return father[id] === child[parentId]
        })
        father[childName] = newArr
        return father[parentId] === 0
    })
}
let msg = treeData(data, 'id', 'parentId', 'childaaa')
console.log(msg)
```

## 寻找数组a+b=c

```javascript
var arr = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length; k++) {
            const element = arr[k]
            if (i < j && j < k && arr[k] == arr[i] + arr[j])
                console.log(arr[i], arr[j], arr[k])
        }
    }
}
```

### 封装检验数据类型

```javascript
  const isType = type => target => `[object ${type}]` === 		 	Object.prototype.toString.call(target)
  const isArray = isType('Array')
  console.log(isArray(''))
```



### 解析 URL Params 为对象

~~~javascript
let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
parseParam(url)
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/
function parseParam(url) {
  const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
  const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
  let paramsObj = {};
  // 将 params 存到对象中
  paramsArr.forEach(param => {
    if (/=/.test(param)) { // 处理有 value 的参数
      let [key, val] = param.split('='); // 分割 key 和 value
      val = decodeURIComponent(val); // 解码
      val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字

      if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
        paramsObj[key] = [].concat(paramsObj[key], val);
      } else { // 如果对象没有这个 key，创建 key 并设置值
        paramsObj[key] = val;
      }
    } else { // 处理没有 value 的参数
      paramsObj[param] = true;
    }
  })

  return paramsObj;
}
const getUrlKey = function (name) {
  return (
    decodeURIComponent(
      (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
        location.href
      ) || [, ""])[1].replace(/\+/g, "%20")
    ) || null
  )
}
~~~

