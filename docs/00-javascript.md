# Javascript基础

## Javascript中输入消息方式

```js
alert();//弹出框
document.write('我是一段文字'); //在网页中输入信息
prompt('请输入姓名');//接受用户输入的输入框
confirm('确定不听课吗')； 确认框
console.log('在控制台输出消息')
总结：
	 1. 在js中如果希望输出一个具体的文本信息，必须带引号
   2. 在使用document.write();的时候，可以在方法内输出html标签，加引号。
```

##  变量

### 定义变量及赋值

```js
定义变量
var 变量名;
赋值
	变量名 = 值;
var 变量名 = 数据;
总结：
	1. 一个变量一次只能保存一个值
    2. 最后一次的赋值结果
    3. 变量是区分大小写（js区分大小写）
```

### 变量命名规范

```js
☞ 规则    必须遵守的，不遵守的话 JS引擎 发现并报错
    1. 由字母(A-Za-z)、数字(0-9)、下划线(_)、美元符号( $ )组成，如：var usrAge, num01, _name
    2. 区分大小写 强调：JS 严格区分大小写 ，var app; 和 var App; 是两个变量
    3. 不能 以数字开头，或者汉字定义变量名
    4. 不能 是关键字、保留字 和 代码符号，例如：var、for、while、&, class
    5. 不能出现空格

☞ 规范  建议遵守的，不遵守的话 JS引擎 也不会报错
	1. 变量名必须有意义
    2. 遵守驼峰命名法。首字母小写，后面单词的首字母需要大写。
```



## 数据类型

### 简单数据类型

- 数值类型 number

  ```js
   ☞ 凡是数字都属于该类型【整数，小数，负数】

   ☞ 只要变量的值是一个具体的数字，那么当前变量的数据类型就是数值类型

   ☞ number类型表示的数字大小：
   	  最大值是±1.7976931348623157乘以10的308次方    Number.MAX_VALUE
        最小值是±5 乘以10的-324次方				  Number.MIN_VALUE

   ☞ 数值类型表示方式：（了解）
  	 ✔ 十进制表示
       	var  n1=10,n2=9, n3=100;

  	 ✔ 十六进制表示
       	以 0x开头 0到9之间的数字，a(A)-f(F)之间字母构成。 a-f对应的数字是10-15
  		[0,1,2,3,4,5,6,7,8,9，a,b,c,d,e,f]
  		var num = 0xA;

  	 ✔ 八进制表示
       	八进制直接以数字0开始，有0-7之间的数字组成。
          var num1 = 07;
          var num2 = 06;
          var num3 = 05;

  ☞ 备注：
  	 进行算数计算时，八进制和十六进制表示的数值最终都将被转换成十进制数值。
  ```

- 字符类型 string

```js
 ☞ 字符串可以是引号中的任意文本。可以使用单引号或双引号

 ☞ 在js中一般写字符串类型的变量时候，推荐使用单引号。
 	字母，汉字，符号作为数据存在必须要用引号包含
    不管是什么数据如果用引号包含就变成字符串类型

 ☞ 注意：
	 1. 单引号和双引号之间的嵌套
      	例如： 输出    我是"高帅富"程序猿;

     2. 转义字符【\】
     	 \n        换行
         \\		   斜杠
         \'		   单引号
		 \"		   双引号
		 \r 	   回车符
        例如：
        var strMsg = 'I'm the GOD of my world ~!';   //输出：I'm the GOD of my world ~!
        var strMsg2 = "I"m the GOD of my world ~!";  //输出：I"m the GOD of my world ~!
        var strMsg3 = '反斜杠是这个 \\，神奇！';  //输出：反斜杠是这个 \，神奇！
```

- 布尔类型 boolean  (bool)

  ```js
  true(真)    和 false (假)
  ```



- null空类型    undefined类型

  ```js
  //如果一个变量没有赋值，该变量的默认是undefined
  		var n1;
  		//如果一个变量的值是undefined，那么该变量的数据类型就是undefined类型
  ```



### 复杂数据类型

- object
- array

```js
在源代码中一个固定值的表示法。

数值字面量：8, 9, 10

字符串字面量：'后端', "大前端"

布尔字面量：true，false
```



### 数据类型判断

```js
 ☞ 使用  typeof 变量  可以得到对应变量的数据类型
 ☞ 例如：
	   var n1 = 123;
		//获取n1的数据类型
		console.log(typeof n1);
		var n2 = '123';
		console.log(typeof n2);
		var n3 = true;
		console.log(typeof n3);
```

### 判断一个变量是不是数字

```js
isNaN(x) 方法
	==>x是数字{false}
	==>x不是数字{true}
is not a number
isNaN(n)==>3 is not a number
例如：
	var usrAge = 21;
    var isOk = isNaN(usrAge);
    console.log(isNum); // false ，21 不是一个 非数值

    var usrName = "James";
    console.log(isNaN(usrName));//true ，"James"是一个 非数值
```

### 数据类型转换

- 转数值类型

```js
 ☞Number(变量)：
  	 总结：
     	  1. 可以通过该方法将数据类型转换为数值类型
            var n1 = '123';
            console.log(typeof n1);
            //方法一：通过Number()
                n1 = Number(n1);
            console.log(typeof n1);
          2. 在转换的过程中可以将原来的值保留，遇到小数直接保留下来，不会舍去
          3. 如果变量无法转换为数值类型，那么返回的结果是NaN； 对应的数据类型依然是数值类
          4. 如果将布尔类型转换为数值类型，true 转化后的结果是 1  false 转化后的结果是0
   NaN：not a number【number类型】

  ☞parseInt(变量)
  	var num1 = parseInt("12.3abc");   // 返回12，如果第一个字符是数字会解析知道遇到非数字结束
    var num2 = parseInt("abc123");   // 返回NaN，如果第一个字符不是数字或者符号就返回NaN
    备注：
        1  只会保留整数部分，通过该方式进行数据类型转换后得到就是一个整数
        2. 如果一个变量中的值无法转换为具体数字，那么返回的结果是一个 NaN 的值
        3. NaN (not  a  number)   ----NaN对应的数据类型是数值类型
        4. 通过该方法可以将其他数据类型转为数值类型

  ☞parseFloat(变量)
	总结：
    	 1. 通过该方法可以将其他数据类型转换为数值类型
         2. 在转换过程中，如果遇到小数，那么会直接将小数部分保留
         3. 如果转化不成功过，返回的结果NaN

	parseFloat()把字符串转换成浮点数
```



### 算数运算符

```js
 + 运算
	总结：
       1. 如果是数值类型的变量相加，结果就是一个数值类型的结果
       2. 如果是一个字符串类型的变量相加，最后的结果就是字符串（加号起到的作用就是拼接字符串的功能）
   如果+两边都是数字就是数学上的加，如果两边有字符串出现就会执行字符串的连接
 -运算
	 总结：
     	1. 如果是数值类型的变量相减，结果就是一个数值类型的结果
        2. 如果是数字的字符串相减，得到的结果也是一个数值类型结果（发生了隐式类型转化）
            var n1 = '123';
            var n2 = '123';
    	3. 如果是非数字的字符串相减，得到的结果是NaN
 *运算
	乘法

 /运算
	   1.如果是数值类型的变量相除，结果就是一个数值类型的结果
       2. 如果是数字的字符串相除，得到的结果也是一个数值类型结果（发生了隐式类型转化）
       3. 如果是非数字的字符串相除，得到的结果是NaN
       4. 如果除数是0 ，得到的结果是 Infinity （无穷大的值）

 %取余（获取余数）
```





### 赋值运算符

```js
+= |  -=   |  *=  |  /=  |   %=    |   =

var  a += b ;    =====> 等价于        a = a+b;

a += 3; a = a + 3;
```

### 一元运算符

```js
 1.   ++  和  --

 2. ++ 运算
 	 ++a       在变量a的基础上加1
     a++	   在变量a的基础上加1


    ✔ 如果将 a++ 或者 ++a赋值给一个变量的时候，这个变量的值有区别

       ◆ 如果将 a++ 赋值一个变量，那么先将a原来的值赋值给新的变量，然后自己再加1（先赋值再计算）
       ◆ 如果将 ++a 赋值一个变量，那么先进行加1计算，然后把计算后的结果赋值给新的变量
    var n = 2;
	  var m = n++;//先赋值再自加
	  var m = ++n;//先自加再赋值var n = 2;
    var m = n++; //先赋值再自加
    var m = ++n; //先自加再赋值
```

### 比较运算符

```js
1.   >  大于

2.   <	小于

3.   >=     大于 或者 等于，只要有一个满足即可

4.   <=     小于 或者 等于，只要满足一个即可

5.  ==      只用来比较变量中的值是否相等，不考虑数据类型

6.  ===     用来判断值和数据类型必须同时相等

7.  !=	    判断值是否不相等，不考虑数据类型

8.  !==     判断值和数据类型


☞ 总结：
	    ✔ 通过比较运算符得到的结果只有两个结果，一个是正确的，一个是错误的
      ✔ 通过比较运算符得到的结果 只有 true[正确] 和 false[错误]
```

### 逻辑运算符

```js
 1.   ||  或： 条件只要有一个满足即可
      总结：
      	  1. 如果条件中有一个结为true(代表有一个条件满足了)，那么通过或运算后最后的结果为true
          2. 如果条件中结果都不满足，那么通过或运算后结果为false

 2.   &&  与： 要求所有的条件都必须满足才可以
 	    总结：
	        1. 如果条件都为真（true），那么通过且运算后最后的结果也是真（true）
          2. 如果条件中自少有一个条件不满足（false），那么通过且运算后的结果为false

 3.   ! 非（取反） : 布尔值转换：!!'123'
```



### 运算符优先级

```js
优先级从高到底
	1. ()  优先级最高
	2. 一元运算符  ++   --   !
	3. 算数运算符  先*  /  %   后 +   -
	4. 关系运算符  >   >=   <   <=
	5. 相等运算符   ==   !=    ===    !==
	6. 逻辑运算符 先 &&   后||
	7. 赋值运算符
   有多个运算符参与运算符的时候，必须有意识的知道运算符存在优先级
   赋值运算符最后执行
   测试：
	  var num = 10;
    var sum = num++ + ++num + num;
	  var sum = num++ + num + ++num；
    console.log(sum);//?
    console.log(num);//?
```



### 三元运算

```js
 表达式 ?  结果1 ：  结果2
  表达式 ？ true ： false;
 使用三元运算的场景:
 	 三元运符可以替代简单的条件判断
  	✔ 先判断表达式的结果是 true还是false
  	✔ 如果结果是true ,那么代码执行 结果1
  	✔ 如果结果是false，那么代码执行 结果2

  	？  ====> 相当与条件判断中的if
  	：  =====> 相当于else
```



### switch语句

```js
switch ( 变量 ) {
    case  值1:
        代码语句..
     break;
    case  值2:
        代码语句...
    break;
    default:
    break;
}
 总结：
	 1. 如果在程序中要表示一个范围，那么推荐使用条件判断
     2. 如果程序中表示的是一个具体的值， 可以用switch语句

  注意：
	//1. switch 后面的变量数据类型必须和 case 后面的值数据类型保持一至
	//2. break语句必须加
```



### while循环

```js
while(条件表达式) {
    代码（循环体）
}
 1.  先条件判断结构是 true 还是 false
 2.  如果是true，那么程序会一直执行循环体中的代码
 3.  如果条件为false，那么程序会立即跳出循环体代码结束执行

 变量初始化==>条件判断（true）==>循环体(变量改)==>条件判断（true）==>循环体(变量改)==>判断（false）==>停止循环
```



### do..while

```js
do {
    循环体代码
}while(条件表达式)
    ☞  先执行循环体代码
 ☞ 然后判断条件
 ☞ 如果条件为true，继续执行循环体代码
 ☞ 如果条件为false,循环体代码立即结束，跳出循环


 与while循环的区别：
 	   1. 如果条件不满足，do while循环会比while循环多执行一次
     2. 如果条件满足，do while循环和while循环执行的次数是一样一样的。
```

### for 循环

```js
☞  如果能明确循环次数，推荐使用for循环， 如果循环次数不确定，可以使用while获取do while循环
for (变量初始化; 条件表达式 ;  变量自增（变量自减）) {
     循环体代码
}
for(变量初始化;条件判断;变量改变){//循环体}
1. 先执行变量初始化
2. 条件判断，结构是否为true
3. 如果条件为true，进入循环体中执行代码 【如果条件为false，循环立即结束】
4. 变量自增或自减  --   条件判断   --  true  --- 执行代码
```

### continue

```js
 1.  当程序遇到continue的时候，会结束本次循环，后面的代码也不会执行。进入到下一次循环中。
```

### break

```js
1. 当程序遇到break语句的时候，程序会立即终止，后面的代码不执行!
```

## 数组

### 定义

数组（array）是按次序排列的一组值。每个值的位置都有编号（从0开始），整个数组用方括号表示。

```javascript
var arr = ['a', 'b', 'c'];
```

上面代码中的`a`、`b`、`c`就构成一个数组，两端的方括号是数组的标志。`a`是0号位置，`b`是1号位置，`c`是2号位置。

除了在定义时赋值，数组也可以先定义后赋值。

```javascript
var arr = [];

arr[0] = 'a';
arr[1] = 'b';
arr[2] = 'c';
```

任何类型的数据，都可以放入数组。

```javascript
var arr = [
  {a: 1},
  [1, 2, 3],
  function() {return true;}
];

arr[0] // Object {a: 1}
arr[1] // [1, 2, 3]
arr[2] // function (){return true;}
```

上面数组`arr`的3个成员依次是对象、数组、函数。

如果数组的元素还是数组，就形成了多维数组。

```javascript
var a = [[1, 2], [3, 4]];
a[0][1] // 2
a[1][1] // 4
```

### 数组的本质

本质上，数组属于一种特殊的对象。`typeof`运算符会返回数组的类型是`object`。

```javascript
typeof [1, 2, 3] // "object"
```

上面代码表明，`typeof`运算符认为数组的类型就是对象。

数组的特殊性体现在，它的键名是按次序排列的一组整数（0，1，2...）。

```javascript
var arr = ['a', 'b', 'c'];

Object.keys(arr)
// ["0", "1", "2"]
```

上面代码中，`Object.keys`方法返回数组的所有键名。可以看到数组的键名就是整数0、1、2。

由于数组成员的键名是固定的（默认总是0、1、2...），因此数组不用为每个元素指定键名，而对象的每个成员都必须指定键名。JavaScript 语言规定，对象的键名一律为字符串，所以，数组的键名其实也是字符串。之所以可以用数值读取，是因为非字符串的键名会被转为字符串。

```javascript
var arr = ['a', 'b', 'c'];

arr['0'] // 'a'
arr[0] // 'a'
```

上面代码分别用数值和字符串作为键名，结果都能读取数组。原因是数值键名被自动转为了字符串。

注意，这点在赋值时也成立。如果一个值总是先转成字符串，再进行赋值。

```javascript
var a = [];

a[1.00] = 6;
a[1] // 6
```

上面代码中，由于`1.00`转成字符串是`1`，所以通过数字键`1`可以读取值。

上一章说过，对象有两种读取成员的方法：点结构（`object.key`）和方括号结构（`object[key]`）。但是，对于数值的键名，不能使用点结构。

```javascript
var arr = [1, 2, 3];
arr.0 // SyntaxError
```

上面代码中，`arr.0`的写法不合法，因为单独的数值不能作为标识符（identifier）。所以，数组成员只能用方括号`arr[0]`表示（方括号是运算符，可以接受数值）。

### length 属性

数组的`length`属性，返回数组的成员数量。

```javascript
['a', 'b', 'c'].length // 3
```

JavaScript 使用一个32位整数，保存数组的元素个数。这意味着，数组成员最多只有 4294967295 个（2<sup>32</sup> - 1）个，也就是说`length`属性的最大值就是 4294967295。

只要是数组，就一定有`length`属性。该属性是一个动态的值，等于键名中的最大整数加上`1`。

```javascript
var arr = ['a', 'b'];
arr.length // 2

arr[2] = 'c';
arr.length // 3

arr[9] = 'd';
arr.length // 10

arr[1000] = 'e';
arr.length // 1001
```

上面代码表示，数组的数字键不需要连续，`length`属性的值总是比最大的那个整数键大`1`。另外，这也表明数组是一种动态的数据结构，可以随时增减数组的成员。

`length`属性是可写的。如果人为设置一个小于当前成员个数的值，该数组的成员会自动减少到`length`设置的值。

```javascript
var arr = [ 'a', 'b', 'c' ];
arr.length // 3

arr.length = 2;
arr // ["a", "b"]
```

上面代码表示，当数组的`length`属性设为2（即最大的整数键只能是1）那么整数键2（值为`c`）就已经不在数组中了，被自动删除了。

清空数组的一个有效方法，就是将`length`属性设为0。

```javascript
var arr = [ 'a', 'b', 'c' ];

arr.length = 0;
arr // []
```

如果人为设置`length`大于当前元素个数，则数组的成员数量会增加到这个值，新增的位置都是空位。

```javascript
var a = ['a'];

a.length = 3;
a[1] // undefined
```

上面代码表示，当`length`属性设为大于数组个数时，读取新增的位置都会返回`undefined`。

如果人为设置`length`为不合法的值，JavaScript 会报错。

```javascript
// 设置负值
[].length = -1
// RangeError: Invalid array length

// 数组元素个数大于等于2的32次方
[].length = Math.pow(2, 32)
// RangeError: Invalid array length

// 设置字符串
[].length = 'abc'
// RangeError: Invalid array length
```

值得注意的是，由于数组本质上是一种对象，所以可以为数组添加属性，但是这不影响`length`属性的值。

```javascript
var a = [];

a['p'] = 'abc';
a.length // 0

a[2.1] = 'abc';
a.length // 0
```

上面代码将数组的键分别设为字符串和小数，结果都不影响`length`属性。因为，`length`属性的值就是等于最大的数字键加1，而这个数组没有整数键，所以`length`属性保持为`0`。

如果数组的键名是添加超出范围的数值，该键名会自动转为字符串。

```javascript
var arr = [];
arr[-1] = 'a';
arr[Math.pow(2, 32)] = 'b';

arr.length // 0
arr[-1] // "a"
arr[4294967296] // "b"
```

上面代码中，我们为数组`arr`添加了两个不合法的数字键，结果`length`属性没有发生变化。这些数字键都变成了字符串键名。最后两行之所以会取到值，是因为取键值时，数字键名会默认转为字符串。

### in 运算符

检查某个键名是否存在的运算符`in`，适用于对象，也适用于数组。

```javascript
var arr = [ 'a', 'b', 'c' ];
2 in arr  // true
'2' in arr // true
4 in arr // false
```

上面代码表明，数组存在键名为`2`的键。由于键名都是字符串，所以数值`2`会自动转成字符串。

注意，如果数组的某个位置是空位，`in`运算符返回`false`。

```javascript
var arr = [];
arr[100] = 'a';

100 in arr // true
1 in arr // false
```

上面代码中，数组`arr`只有一个成员`arr[100]`，其他位置的键名都会返回`false`。

### for...in 循环和数组的遍历

`for...in`循环不仅可以遍历对象，也可以遍历数组，毕竟数组只是一种特殊对象。

```javascript
var a = [1, 2, 3];

for (var i in a) {
  console.log(a[i]);
}
// 1
// 2
// 3
```

但是，`for...in`不仅会遍历数组所有的数字键，还会遍历非数字键。

```javascript
var a = [1, 2, 3];
a.foo = true;

for (var key in a) {
  console.log(key);
}
// 0
// 1
// 2
// foo
```

上面代码在遍历数组时，也遍历到了非整数键`foo`。所以，不推荐使用`for...in`遍历数组。

数组的遍历可以考虑使用`for`循环或`while`循环。

```javascript
var a = [1, 2, 3];

// for循环
for(var i = 0; i < a.length; i++) {
  console.log(a[i]);
}

// while循环
var i = 0;
while (i < a.length) {
  console.log(a[i]);
  i++;
}

var l = a.length;
while (l--) {
  console.log(a[l]);
}
```

上面代码是三种遍历数组的写法。最后一种写法是逆向遍历，即从最后一个元素向第一个元素遍历。

数组的`forEach`方法，也可以用来遍历数组，详见《标准库》的 Array 对象一章。

```javascript
var colors = ['red', 'green', 'blue'];
colors.forEach(function (color) {
  console.log(color);
});
// red
// green
// blue
```

### 数组的空位

当数组的某个位置是空元素，即两个逗号之间没有任何值，我们称该数组存在空位（hole）。

```javascript
var a = [1, , 1];
a.length // 3
```

上面代码表明，数组的空位不影响`length`属性。

需要注意的是，如果最后一个元素后面有逗号，并不会产生空位。也就是说，有没有这个逗号，结果都是一样的。

```javascript
var a = [1, 2, 3,];

a.length // 3
a // [1, 2, 3]
```

上面代码中，数组最后一个成员后面有一个逗号，这不影响`length`属性的值，与没有这个逗号时效果一样。

数组的空位是可以读取的，返回`undefined`。

```javascript
var a = [, , ,];
a[1] // undefined
```

使用`delete`命令删除一个数组成员，会形成空位，并且不会影响`length`属性。

```javascript
var a = [1, 2, 3];
delete a[1];

a[1] // undefined
a.length // 3
```

上面代码用`delete`命令删除了数组的第二个元素，这个位置就形成了空位，但是对`length`属性没有影响。也就是说，`length`属性不过滤空位。所以，使用`length`属性进行数组遍历，一定要非常小心。

数组的某个位置是空位，与某个位置是`undefined`，是不一样的。如果是空位，使用数组的`forEach`方法、`for...in`结构、以及`Object.keys`方法进行遍历，空位都会被跳过。

```javascript
var a = [, , ,];

a.forEach(function (x, i) {
  console.log(i + '. ' + x);
})
// 不产生任何输出

for (var i in a) {
  console.log(i);
}
// 不产生任何输出

Object.keys(a)
// []
```

如果某个位置是`undefined`，遍历的时候就不会被跳过。

```javascript
var a = [undefined, undefined, undefined];

a.forEach(function (x, i) {
  console.log(i + '. ' + x);
});
// 0. undefined
// 1. undefined
// 2. undefined

for (var i in a) {
  console.log(i);
}
// 0
// 1
// 2

Object.keys(a)
// ['0', '1', '2']
```

这就是说，空位就是数组没有这个元素，所以不会被遍历到，而`undefined`则表示数组有这个元素，值是`undefined`，所以遍历不会跳过。

### 类似数组的对象

如果一个对象的所有键名都是正整数或零，并且有`length`属性，那么这个对象就很像数组，语法上称为“类似数组的对象”（array-like object）。

```javascript
var obj = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};

obj[0] // 'a'
obj[1] // 'b'
obj.length // 3
obj.push('d') // TypeError: obj.push is not a function
```

上面代码中，对象`obj`就是一个类似数组的对象。但是，“类似数组的对象”并不是数组，因为它们不具备数组特有的方法。对象`obj`没有数组的`push`方法，使用该方法就会报错。

“类似数组的对象”的根本特征，就是具有`length`属性。只要有`length`属性，就可以认为这个对象类似于数组。但是有一个问题，这种`length`属性不是动态值，不会随着成员的变化而变化。

```javascript
var obj = {
  length: 0
};
obj[3] = 'd';
obj.length // 0
```

上面代码为对象`obj`添加了一个数字键，但是`length`属性没变。这就说明了`obj`不是数组。

典型的“类似数组的对象”是函数的`arguments`对象，以及大多数 DOM 元素集，还有字符串。

```javascript
// arguments对象
function args() { return arguments }
var arrayLike = args('a', 'b');

arrayLike[0] // 'a'
arrayLike.length // 2
arrayLike instanceof Array // false

// DOM元素集
var elts = document.getElementsByTagName('h3');
elts.length // 3
elts instanceof Array // false

// 字符串
'abc'[1] // 'b'
'abc'.length // 3
'abc' instanceof Array // false
```

上面代码包含三个例子，它们都不是数组（`instanceof`运算符返回`false`），但是看上去都非常像数组。

数组的`slice`方法可以将“类似数组的对象”变成真正的数组。

```javascript
var arr = Array.prototype.slice.call(arrayLike);
```

除了转为真正的数组，“类似数组的对象”还有一个办法可以使用数组的方法，就是通过`call()`把数组的方法放到对象上面。

```javascript
function print(value, index) {
  console.log(index + ' : ' + value);
}

Array.prototype.forEach.call(arrayLike, print);
```

上面代码中，`arrayLike`代表一个类似数组的对象，本来是不可以使用数组的`forEach()`方法的，但是通过`call()`，可以把`forEach()`嫁接到`arrayLike`上面调用。

下面的例子就是通过这种方法，在`arguments`对象上面调用`forEach`方法。

```javascript
// forEach 方法
function logArgs() {
  Array.prototype.forEach.call(arguments, function (elem, i) {
    console.log(i + '. ' + elem);
  });
}

// 等同于 for 循环
function logArgs() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(i + '. ' + arguments[i]);
  }
}
```

字符串也是类似数组的对象，所以也可以用`Array.prototype.forEach.call`遍历。

```javascript
Array.prototype.forEach.call('abc', function (chr) {
  console.log(chr);
});
// a
// b
// c
```

注意，这种方法比直接使用数组原生的`forEach`要慢，所以最好还是先将“类似数组的对象”转为真正的数组，然后再直接调用数组的`forEach`方法。

```javascript
var arr = Array.prototype.slice.call('abc');
arr.forEach(function (chr) {
  console.log(chr);
});
// a
// b
// c
```

### 参考链接

- Axel Rauschmayer, [Arrays in JavaScript](http://www.2ality.com/2012/12/arrays.html)
- Axel Rauschmayer, [JavaScript: sparse arrays vs. dense arrays](http://www.2ality.com/2012/06/dense-arrays.html)
- Felix Bohm, [What They Didn’t Tell You About ES5′s Array Extras](http://net.tutsplus.com/tutorials/javascript-ajax/what-they-didnt-tell-you-about-es5s-array-extras/)
- Juriy Zaytsev, [How ECMAScript 5 still does not allow to subclass an array](http://perfectionkills.com/how-ecmascript-5-still-does-not-allow-to-subclass-an-array/)

```js
1. 给一组数字数组，将该数组中的数据排序（按照从小到大的规则） 冒泡排序
   ☞ 排序：  按照从小到大方式排序(升序)  |  按照从大到小排序（降序）

 2. 冒泡排序
 	    ✔ 比较  	（遍历）
      ✔ 交换位置   （找一个中间变量）
```

## 函数

### 函数

函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。

### 概述

#### 函数的声明

JavaScript 有三种声明函数的方法。

**（1）function 命令**

`function`命令声明的代码区块，就是一个函数。`function`命令后面是函数名，函数名后面是一对圆括号，里面是传入函数的参数。函数体放在大括号里面。

```javascript
function print(s) {
  console.log(s);
}
```

上面的代码命名了一个`print`函数，以后使用`print()`这种形式，就可以调用相应的代码。这叫做函数的声明（Function Declaration）。

**（2）函数表达式**

除了用`function`命令声明函数，还可以采用变量赋值的写法。

```javascript
var print = function(s) {
  console.log(s);
};
```

这种写法将一个匿名函数赋值给变量。这时，这个匿名函数又称函数表达式（Function Expression），因为赋值语句的等号右侧只能放表达式。

采用函数表达式声明函数时，`function`命令后面不带有函数名。如果加上函数名，该函数名只在函数体内部有效，在函数体外部无效。

```javascript
var print = function x(){
  console.log(typeof x);
};

x
// ReferenceError: x is not defined

print()
// function
```

上面代码在函数表达式中，加入了函数名`x`。这个`x`只在函数体内部可用，指代函数表达式本身，其他地方都不可用。这种写法的用处有两个，一是可以在函数体内部调用自身，二是方便除错（除错工具显示函数调用栈时，将显示函数名，而不再显示这里是一个匿名函数）。因此，下面的形式声明函数也非常常见。

```javascript
var f = function f() {};
```

需要注意的是，函数的表达式需要在语句的结尾加上分号，表示语句结束。而函数的声明在结尾的大括号后面不用加分号。总的来说，这两种声明函数的方式，差别很细微，可以近似认为是等价的。

**（3）Function 构造函数**

第三种声明函数的方式是`Function`构造函数。

```javascript
var add = new Function(
  'x',
  'y',
  'return x + y'
);

// 等同于
function add(x, y) {
  return x + y;
}
```

上面代码中，`Function`构造函数接受三个参数，除了最后一个参数是`add`函数的“函数体”，其他参数都是`add`函数的参数。

你可以传递任意数量的参数给`Function`构造函数，只有最后一个参数会被当做函数体，如果只有一个参数，该参数就是函数体。

```javascript
var foo = new Function(
  'return "hello world";'
);

// 等同于
function foo() {
  return 'hello world';
}
```

`Function`构造函数可以不使用`new`命令，返回结果完全一样。

总的来说，这种声明函数的方式非常不直观，几乎无人使用。

#### 函数的重复声明

如果同一个函数被多次声明，后面的声明就会覆盖前面的声明。

```javascript
function f() {
  console.log(1);
}
f() // 2

function f() {
  console.log(2);
}
f() // 2
```

上面代码中，后一次的函数声明覆盖了前面一次。而且，由于函数名的提升（参见下文），前一次声明在任何时候都是无效的，这一点要特别注意。

#### 圆括号运算符，return 语句和递归

调用函数时，要使用圆括号运算符。圆括号之中，可以加入函数的参数。

```javascript
function add(x, y) {
  return x + y;
}

add(1, 1) // 2
```

上面代码中，函数名后面紧跟一对圆括号，就会调用这个函数。

函数体内部的`return`语句，表示返回。JavaScript 引擎遇到`return`语句，就直接返回`return`后面的那个表达式的值，后面即使还有语句，也不会得到执行。也就是说，`return`语句所带的那个表达式，就是函数的返回值。`return`语句不是必需的，如果没有的话，该函数就不返回任何值，或者说返回`undefined`。

函数可以调用自身，这就是递归（recursion）。下面就是通过递归，计算斐波那契数列的代码。

```javascript
function fib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 2) + fib(num - 1);
}

fib(6) // 8
```

上面代码中，`fib`函数内部又调用了`fib`，计算得到斐波那契数列的第6个元素是8。

#### 第一等公民

JavaScript 语言将函数看作一种值，与其它值（数值、字符串、布尔值等等）地位相同。凡是可以使用值的地方，就能使用函数。比如，可以把函数赋值给变量和对象的属性，也可以当作参数传入其他函数，或者作为函数的结果返回。函数只是一个可以执行的值，此外并无特殊之处。

由于函数与其他数据类型地位平等，所以在 JavaScript 语言中又称函数为第一等公民。

```javascript
function add(x, y) {
  return x + y;
}

// 将函数赋值给一个变量
var operator = add;

// 将函数作为参数和返回值
function a(op){
  return op;
}
a(add)(1, 1)
// 2
```

#### 函数名的提升

JavaScript 引擎将函数名视同变量名，所以采用`function`命令声明函数时，整个函数会像变量声明一样，被提升到代码头部。所以，下面的代码不会报错。

```javascript
f();

function f() {}
```

表面上，上面代码好像在声明之前就调用了函数`f`。但是实际上，由于“变量提升”，函数`f`被提升到了代码头部，也就是在调用之前已经声明了。但是，如果采用赋值语句定义函数，JavaScript 就会报错。

```javascript
f();
var f = function (){};
// TypeError: undefined is not a function
```

上面的代码等同于下面的形式。

```javascript
var f;
f();
f = function () {};
```

上面代码第二行，调用`f`的时候，`f`只是被声明了，还没有被赋值，等于`undefined`，所以会报错。因此，如果同时采用`function`命令和赋值语句声明同一个函数，最后总是采用赋值语句的定义。

```javascript
var f = function () {
  console.log('1');
}

function f() {
  console.log('2');
}

f() // 1
```

### 函数的属性和方法

#### name 属性

函数的`name`属性返回函数的名字。

```javascript
function f1() {}
f1.name // "f1"
```

如果是通过变量赋值定义的函数，那么`name`属性返回变量名。

```javascript
var f2 = function () {};
f2.name // "f2"
```

但是，上面这种情况，只有在变量的值是一个匿名函数时才是如此。如果变量的值是一个具名函数，那么`name`属性返回`function`关键字之后的那个函数名。

```javascript
var f3 = function myName() {};
f3.name // 'myName'
```

上面代码中，`f3.name`返回函数表达式的名字。注意，真正的函数名还是`f3`，而`myName`这个名字只在函数体内部可用。

`name`属性的一个用处，就是获取参数函数的名字。

```javascript
var myFunc = function () {};

function test(f) {
  console.log(f.name);
}

test(myFunc) // myFunc
```

上面代码中，函数`test`内部通过`name`属性，就可以知道传入的参数是什么函数。

#### length 属性

函数的`length`属性返回函数预期传入的参数个数，即函数定义之中的参数个数。

```javascript
function f(a, b) {}
f.length // 2
```

上面代码定义了空函数`f`，它的`length`属性就是定义时的参数个数。不管调用时输入了多少个参数，`length`属性始终等于2。

`length`属性提供了一种机制，判断定义时和调用时参数的差异，以便实现面向对象编程的“方法重载”（overload）。

#### toString()

函数的`toString`方法返回一个字符串，内容是函数的源码。

```javascript
function f() {
  a();
  b();
  c();
}

f.toString()
// function f() {
//  a();
//  b();
//  c();
// }
```

函数内部的注释也可以返回。

```javascript
function f() {/*
  这是一个
  多行注释
*/}

f.toString()
// "function f(){/*
//   这是一个
//   多行注释
// */}"
```

利用这一点，可以变相实现多行字符串。

```javascript
var multiline = function (fn) {
  var arr = fn.toString().split('\n');
  return arr.slice(1, arr.length - 1).join('\n');
};

function f() {/*
  这是一个
  多行注释
*/}

multiline(f);
// " 这是一个
//   多行注释"
```

### 函数作用域

#### 定义

作用域（scope）指的是变量存在的范围。在 ES5 的规范中，JavaScript 只有两种作用域：一种是全局作用域，变量在整个程序中一直存在，所有地方都可以读取；另一种是函数作用域，变量只在函数内部存在。ES6 又新增了块级作用域，本教程不涉及。

对于顶层函数来说，函数外部声明的变量就是全局变量（global variable），它可以在函数内部读取。

```javascript
var v = 1;

function f() {
  console.log(v);
}

f()
// 1
```

上面的代码表明，函数`f`内部可以读取全局变量`v`。

在函数内部定义的变量，外部无法读取，称为“局部变量”（local variable）。

```javascript
function f(){
  var v = 1;
}

v // ReferenceError: v is not defined
```

上面代码中，变量`v`在函数内部定义，所以是一个局部变量，函数之外就无法读取。

函数内部定义的变量，会在该作用域内覆盖同名全局变量。

```javascript
var v = 1;

function f(){
  var v = 2;
  console.log(v);
}

f() // 2
v // 1
```

上面代码中，变量`v`同时在函数的外部和内部有定义。结果，在函数内部定义，局部变量`v`覆盖了全局变量`v`。

注意，对于`var`命令来说，局部变量只能在函数内部声明，在其他区块中声明，一律都是全局变量。

```javascript
if (true) {
  var x = 5;
}
console.log(x);  // 5
```

上面代码中，变量`x`在条件判断区块之中声明，结果就是一个全局变量，可以在区块之外读取。

#### 函数内部的变量提升

与全局作用域一样，函数作用域内部也会产生“变量提升”现象。`var`命令声明的变量，不管在什么位置，变量声明都会被提升到函数体的头部。

```javascript
function foo(x) {
  if (x > 100) {
    var tmp = x - 100;
  }
}

// 等同于
function foo(x) {
  var tmp;
  if (x > 100) {
    tmp = x - 100;
  };
}
```

#### 函数本身的作用域

函数本身也是一个值，也有自己的作用域。它的作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关。

```javascript
var a = 1;
var x = function () {
  console.log(a);
};

function f() {
  var a = 2;
  x();
}

f() // 1
```

上面代码中，函数`x`是在函数`f`的外部声明的，所以它的作用域绑定外层，内部变量`a`不会到函数`f`体内取值，所以输出`1`，而不是`2`。

总之，函数执行时所在的作用域，是定义时的作用域，而不是调用时所在的作用域。

很容易犯错的一点是，如果函数`A`调用函数`B`，却没考虑到函数`B`不会引用函数`A`的内部变量。

```javascript
var x = function () {
  console.log(a);
};

function y(f) {
  var a = 2;
  f();
}

y(x)
// ReferenceError: a is not defined
```

上面代码将函数`x`作为参数，传入函数`y`。但是，函数`x`是在函数`y`体外声明的，作用域绑定外层，因此找不到函数`y`的内部变量`a`，导致报错。

同样的，函数体内部声明的函数，作用域绑定函数体内部。

```javascript
function foo() {
  var x = 1;
  function bar() {
    console.log(x);
  }
  return bar;
}

var x = 2;
var f = foo();
f() // 1
```

上面代码中，函数`foo`内部声明了一个函数`bar`，`bar`的作用域绑定`foo`。当我们在`foo`外部取出`bar`执行时，变量`x`指向的是`foo`内部的`x`，而不是`foo`外部的`x`。正是这种机制，构成了下文要讲解的“闭包”现象。

### 参数

#### 概述

函数运行的时候，有时需要提供外部数据，不同的外部数据会得到不同的结果，这种外部数据就叫参数。

```javascript
function square(x) {
  return x * x;
}

square(2) // 4
square(3) // 9
```

上式的`x`就是`square`函数的参数。每次运行的时候，需要提供这个值，否则得不到结果。

#### 参数的省略

函数参数不是必需的，JavaScript 允许省略参数。

```javascript
function f(a, b) {
  return a;
}

f(1, 2, 3) // 1
f(1) // 1
f() // undefined

f.length // 2
```

上面代码的函数`f`定义了两个参数，但是运行时无论提供多少个参数（或者不提供参数），JavaScript 都不会报错。省略的参数的值就变为`undefined`。需要注意的是，函数的`length`属性与实际传入的参数个数无关，只反映函数预期传入的参数个数。

但是，没有办法只省略靠前的参数，而保留靠后的参数。如果一定要省略靠前的参数，只有显式传入`undefined`。

```javascript
function f(a, b) {
  return a;
}

f( , 1) // SyntaxError: Unexpected token ,(…)
f(undefined, 1) // undefined
```

上面代码中，如果省略第一个参数，就会报错。

#### 传递方式

函数参数如果是原始类型的值（数值、字符串、布尔值），传递方式是传值传递（passes by value）。这意味着，在函数体内修改参数值，不会影响到函数外部。

```javascript
var p = 2;

function f(p) {
  p = 3;
}
f(p);

p // 2
```

上面代码中，变量`p`是一个原始类型的值，传入函数`f`的方式是传值传递。因此，在函数内部，`p`的值是原始值的拷贝，无论怎么修改，都不会影响到原始值。

但是，如果函数参数是复合类型的值（数组、对象、其他函数），传递方式是传址传递（pass by reference）。也就是说，传入函数的原始值的地址，因此在函数内部修改参数，将会影响到原始值。

```javascript
var obj = { p: 1 };

function f(o) {
  o.p = 2;
}
f(obj);

obj.p // 2
```

上面代码中，传入函数`f`的是参数对象`obj`的地址。因此，在函数内部修改`obj`的属性`p`，会影响到原始值。

注意，如果函数内部修改的，不是参数对象的某个属性，而是替换掉整个参数，这时不会影响到原始值。

```javascript
var obj = [1, 2, 3];

function f(o) {
  o = [2, 3, 4];
}
f(obj);

obj // [1, 2, 3]
```

上面代码中，在函数`f`内部，参数对象`obj`被整个替换成另一个值。这时不会影响到原始值。这是因为，形式参数（`o`）的值实际是参数`obj`的地址，重新对`o`赋值导致`o`指向另一个地址，保存在原地址上的值当然不受影响。

#### 同名参数

如果有同名的参数，则取最后出现的那个值。

```javascript
function f(a, a) {
  console.log(a);
}

f(1, 2) // 2
```

上面代码中，函数`f`有两个参数，且参数名都是`a`。取值的时候，以后面的`a`为准，即使后面的`a`没有值或被省略，也是以其为准。

```javascript
function f(a, a) {
  console.log(a);
}

f(1) // undefined
```

调用函数`f`的时候，没有提供第二个参数，`a`的取值就变成了`undefined`。这时，如果要获得第一个`a`的值，可以使用`arguments`对象。

```javascript
function f(a, a) {
  console.log(arguments[0]);
}

f(1) // 1
```

#### arguments 对象

**（1）定义**

由于 JavaScript 允许函数有不定数目的参数，所以需要一种机制，可以在函数体内部读取所有参数。这就是`arguments`对象的由来。

`arguments`对象包含了函数运行时的所有参数，`arguments[0]`就是第一个参数，`arguments[1]`就是第二个参数，以此类推。这个对象只有在函数体内部，才可以使用。

```javascript
var f = function (one) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

f(1, 2, 3)
// 1
// 2
// 3
```

正常模式下，`arguments`对象可以在运行时修改。

```javascript
var f = function(a, b) {
  arguments[0] = 3;
  arguments[1] = 2;
  return a + b;
}

f(1, 1) // 5
```

上面代码中，函数`f`调用时传入的参数，在函数内部被修改成`3`和`2`。

严格模式下，`arguments`对象与函数参数不具有联动关系。也就是说，修改`arguments`对象不会影响到实际的函数参数。

```javascript
var f = function(a, b) {
  'use strict'; // 开启严格模式
  arguments[0] = 3;
  arguments[1] = 2;
  return a + b;
}

f(1, 1) // 2
```

上面代码中，函数体内是严格模式，这时修改`arguments`对象，不会影响到真实参数`a`和`b`。

通过`arguments`对象的`length`属性，可以判断函数调用时到底带几个参数。

```javascript
function f() {
  return arguments.length;
}

f(1, 2, 3) // 3
f(1) // 1
f() // 0
```

**（2）与数组的关系**

需要注意的是，虽然`arguments`很像数组，但它是一个对象。数组专有的方法（比如`slice`和`forEach`），不能在`arguments`对象上直接使用。

如果要让`arguments`对象使用数组方法，真正的解决方法是将`arguments`转为真正的数组。下面是两种常用的转换方法：`slice`方法和逐一填入新数组。

```javascript
var args = Array.prototype.slice.call(arguments);

// 或者
var args = [];
for (var i = 0; i < arguments.length; i++) {
  args.push(arguments[i]);
}
```

**（3）callee 属性**

`arguments`对象带有一个`callee`属性，返回它所对应的原函数。

```javascript
var f = function () {
  console.log(arguments.callee === f);
}

f() // true
```

可以通过`arguments.callee`，达到调用函数自身的目的。这个属性在严格模式里面是禁用的，因此不建议使用。

### 函数的其他知识点

#### 闭包

闭包（closure）是 JavaScript 语言的一个难点，也是它的特色，很多高级应用都要依靠闭包实现。

理解闭包，首先必须理解变量作用域。前面提到，JavaScript 有两种作用域：全局作用域和函数作用域。函数内部可以直接读取全局变量。

```javascript
var n = 999;

function f1() {
  console.log(n);
}
f1() // 999
```

上面代码中，函数`f1`可以读取全局变量`n`。

但是，函数外部无法读取函数内部声明的变量。

```javascript
function f1() {
  var n = 999;
}

console.log(n)
// Uncaught ReferenceError: n is not defined(
```

上面代码中，函数`f1`内部声明的变量`n`，函数外是无法读取的。

如果出于种种原因，需要得到函数内的局部变量。正常情况下，这是办不到的，只有通过变通方法才能实现。那就是在函数的内部，再定义一个函数。

```javascript
function f1() {
  var n = 999;
  function f2() {
　　console.log(n); // 999
  }
}
```

上面代码中，函数`f2`就在函数`f1`内部，这时`f1`内部的所有局部变量，对`f2`都是可见的。但是反过来就不行，`f2`内部的局部变量，对`f1`就是不可见的。这就是 JavaScript 语言特有的"链式作用域"结构（chain scope），子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。

既然`f2`可以读取`f1`的局部变量，那么只要把`f2`作为返回值，我们不就可以在`f1`外部读取它的内部变量了吗！

```javascript
function f1() {
  var n = 999;
  function f2() {
    console.log(n);
  }
  return f2;
}

var result = f1();
result(); // 999
```

上面代码中，函数`f1`的返回值就是函数`f2`，由于`f2`可以读取`f1`的内部变量，所以就可以在外部获得`f1`的内部变量了。

闭包就是函数`f2`，即能够读取其他函数内部变量的函数。由于在 JavaScript 语言中，只有函数内部的子函数才能读取内部变量，因此可以把闭包简单理解成“定义在一个函数内部的函数”。闭包最大的特点，就是它可以“记住”诞生的环境，比如`f2`记住了它诞生的环境`f1`，所以从`f2`可以得到`f1`的内部变量。在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

闭包的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。请看下面的例子，闭包使得内部变量记住上一次调用时的运算结果。

```javascript
function createIncrementor(start) {
  return function () {
    return start++;
  };
}

var inc = createIncrementor(5);

inc() // 5
inc() // 6
inc() // 7
```

上面代码中，`start`是函数`createIncrementor`的内部变量。通过闭包，`start`的状态被保留了，每一次调用都是在上一次调用的基础上进行计算。从中可以看到，闭包`inc`使得函数`createIncrementor`的内部环境，一直存在。所以，闭包可以看作是函数内部作用域的一个接口。

为什么会这样呢？原因就在于`inc`始终在内存中，而`inc`的存在依赖于`createIncrementor`，因此也始终在内存中，不会在调用结束后，被垃圾回收机制回收。

闭包的另一个用处，是封装对象的私有属性和私有方法。

```javascript
function Person(name) {
  var _age;
  function setAge(n) {
    _age = n;
  }
  function getAge() {
    return _age;
  }

  return {
    name: name,
    getAge: getAge,
    setAge: setAge
  };
}

var p1 = Person('张三');
p1.setAge(25);
p1.getAge() // 25
```

上面代码中，函数`Person`的内部变量`_age`，通过闭包`getAge`和`setAge`，变成了返回对象`p1`的私有变量。

注意，外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。因此不能滥用闭包，否则会造成网页的性能问题。

#### 立即调用的函数表达式（IIFE）

在 JavaScript 中，圆括号`()`是一种运算符，跟在函数名之后，表示调用该函数。比如，`print()`就表示调用`print`函数。

有时，我们需要在定义函数之后，立即调用该函数。这时，你不能在函数的定义之后加上圆括号，这会产生语法错误。

```javascript
function(){ /* code */ }();
// SyntaxError: Unexpected token (
```

产生这个错误的原因是，`function`这个关键字即可以当作语句，也可以当作表达式。

```javascript
// 语句
function f() {}

// 表达式
var f = function f() {}
```

为了避免解析上的歧义，JavaScript 引擎规定，如果`function`关键字出现在行首，一律解释成语句。因此，JavaScript 引擎看到行首是`function`关键字之后，认为这一段都是函数的定义，不应该以圆括号结尾，所以就报错了。

解决方法就是不要让`function`出现在行首，让引擎将其理解成一个表达式。最简单的处理，就是将其放在一个圆括号里面。

```javascript
(function(){ /* code */ }());
// 或者
(function(){ /* code */ })();
```

上面两种写法都是以圆括号开头，引擎就会认为后面跟的是一个表示式，而不是函数定义语句，所以就避免了错误。这就叫做“立即调用的函数表达式”（Immediately-Invoked Function Expression），简称 IIFE。

注意，上面两种写法最后的分号都是必须的。如果省略分号，遇到连着两个 IIFE，可能就会报错。

```javascript
// 报错
(function(){ /* code */ }())
(function(){ /* code */ }())
```

上面代码的两行之间没有分号，JavaScript 会将它们连在一起解释，将第二行解释为第一行的参数。

推而广之，任何让解释器以表达式来处理函数定义的方法，都能产生同样的效果，比如下面三种写法。

```javascript
var i = function(){ return 10; }();
true && function(){ /* code */ }();
0, function(){ /* code */ }();
```

甚至像下面这样写，也是可以的。

```javascript
!function () { /* code */ }();
~function () { /* code */ }();
-function () { /* code */ }();
+function () { /* code */ }();
```

通常情况下，只对匿名函数使用这种“立即执行的函数表达式”。它的目的有两个：一是不必为函数命名，避免了污染全局变量；二是 IIFE 内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量。

```javascript
// 写法一
var tmp = newData;
processData(tmp);
storeData(tmp);

// 写法二
(function () {
  var tmp = newData;
  processData(tmp);
  storeData(tmp);
}());
```

上面代码中，写法二比写法一更好，因为完全避免了污染全局变量。

### eval 命令

#### 基本用法

`eval`命令接受一个字符串作为参数，并将这个字符串当作语句执行。

```javascript
eval('var a = 1;');
a // 1
```

上面代码将字符串当作语句运行，生成了变量`a`。

如果参数字符串无法当作语句运行，那么就会报错。

```javascript
eval('3x') // Uncaught SyntaxError: Invalid or unexpected token
```

放在`eval`中的字符串，应该有独自存在的意义，不能用来与`eval`以外的命令配合使用。举例来说，下面的代码将会报错。

```javascript
eval('return;'); // Uncaught SyntaxError: Illegal return statement
```

上面代码会报错，因为`return`不能单独使用，必须在函数中使用。

如果`eval`的参数不是字符串，那么会原样返回。

```javascript
eval(123) // 123
```

`eval`没有自己的作用域，都在当前作用域内执行，因此可能会修改当前作用域的变量的值，造成安全问题。

```javascript
var a = 1;
eval('a = 2');

a // 2
```

上面代码中，`eval`命令修改了外部变量`a`的值。由于这个原因，`eval`有安全风险。

为了防止这种风险，JavaScript 规定，如果使用严格模式，`eval`内部声明的变量，不会影响到外部作用域。

```javascript
(function f() {
  'use strict';
  eval('var foo = 123');
  console.log(foo);  // ReferenceError: foo is not defined
})()
```

上面代码中，函数`f`内部是严格模式，这时`eval`内部声明的`foo`变量，就不会影响到外部。

不过，即使在严格模式下，`eval`依然可以读写当前作用域的变量。

```javascript
(function f() {
  'use strict';
  var foo = 1;
  eval('foo = 2');
  console.log(foo);  // 2
})()
```

上面代码中，严格模式下，`eval`内部还是改写了外部变量，可见安全风险依然存在。

总之，`eval`的本质是在当前作用域之中，注入代码。由于安全风险和不利于 JavaScript 引擎优化执行速度，所以一般不推荐使用。通常情况下，`eval`最常见的场合是解析 JSON 数据的字符串，不过正确的做法应该是使用原生的`JSON.parse`方法。

#### eval 的别名调用

前面说过`eval`不利于引擎优化执行速度。更麻烦的是，还有下面这种情况，引擎在静态代码分析的阶段，根本无法分辨执行的是`eval`。

```javascript
var m = eval;
m('var x = 1');
x // 1
```

上面代码中，变量`m`是`eval`的别名。静态代码分析阶段，引擎分辨不出`m('var x = 1')`执行的是`eval`命令。

为了保证`eval`的别名不影响代码优化，JavaScript 的标准规定，凡是使用别名执行`eval`，`eval`内部一律是全局作用域。

```javascript
var a = 1;

function f() {
  var a = 2;
  var e = eval;
  e('console.log(a)');
}

f() // 1
```

上面代码中，`eval`是别名调用，所以即使它是在函数中，它的作用域还是全局作用域，因此输出的`a`为全局变量。这样的话，引擎就能确认`e()`不会对当前的函数作用域产生影响，优化的时候就可以把这一行排除掉。

`eval`的别名调用的形式五花八门，只要不是直接调用，都属于别名调用，因为引擎只能分辨`eval()`这一种形式是直接调用。

```javascript
eval.call(null, '...')
window.eval('...')
(1, eval)('...')
(eval, eval)('...')
```

上面这些形式都是`eval`的别名调用，作用域都是全局作用域。

### 参考链接

- Ben Alman, [Immediately-Invoked Function Expression (IIFE)](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)
- Mark Daggett, [Functions Explained](http://markdaggett.com/blog/2013/02/15/functions-explained/)
- Juriy Zaytsev, [Named function expressions demystified](http://kangax.github.com/nfe/)
- Marco Rogers polotek, [What is the arguments object?](http://docs.nodejitsu.com/articles/javascript-conventions/what-is-the-arguments-object)
- Juriy Zaytsev, [Global eval. What are the options?](http://perfectionkills.com/global-eval-what-are-the-options/)
- Axel Rauschmayer, [Evaluating JavaScript code via eval() and new Function()](http://www.2ality.com/2014/01/eval.html)



## 对象

### 概述

#### 生成方法

对象（object）是 JavaScript 语言的核心概念，也是最重要的数据类型。

什么是对象？简单说，对象就是一组“键值对”（key-value）的集合，是一种无序的复合数据集合。

```javascript
var obj = {
  foo: 'Hello',
  bar: 'World'
};
```

上面代码中，大括号就定义了一个对象，它被赋值给变量`obj`，所以变量`obj`就指向一个对象。该对象内部包含两个键值对（又称为两个“成员”），第一个键值对是`foo: 'Hello'`，其中`foo`是“键名”（成员的名称），字符串`Hello`是“键值”（成员的值）。键名与键值之间用冒号分隔。第二个键值对是`bar: 'World'`，`bar`是键名，`World`是键值。两个键值对之间用逗号分隔。

#### 键名

对象的所有键名都是字符串（ES6 又引入了 Symbol 值也可以作为键名），所以加不加引号都可以。上面的代码也可以写成下面这样。

```javascript
var obj = {
  'foo': 'Hello',
  'bar': 'World'
};
```

如果键名是数值，会被自动转为字符串。

```javascript
var obj = {
  1: 'a',
  3.2: 'b',
  1e2: true,
  1e-2: true,
  .234: true,
  0xFF: true
};

obj
// Object {
//   1: "a",
//   3.2: "b",
//   100: true,
//   0.01: true,
//   0.234: true,
//   255: true
// }

obj['100'] // true
```

上面代码中，对象`obj`的所有键名虽然看上去像数值，实际上都被自动转成了字符串。

如果键名不符合标识名的条件（比如第一个字符为数字，或者含有空格或运算符），且也不是数字，则必须加上引号，否则会报错。

```javascript
// 报错
var obj = {
  1p: 'Hello World'
};

// 不报错
var obj = {
  '1p': 'Hello World',
  'h w': 'Hello World',
  'p+q': 'Hello World'
};
```

上面对象的三个键名，都不符合标识名的条件，所以必须加上引号。

对象的每一个键名又称为“属性”（property），它的“键值”可以是任何数据类型。如果一个属性的值为函数，通常把这个属性称为“方法”，它可以像函数那样调用。

```javascript
var obj = {
  p: function (x) {
    return 2 * x;
  }
};

obj.p(1) // 2
```

上面代码中，对象`obj`的属性`p`，就指向一个函数。

如果属性的值还是一个对象，就形成了链式引用。

```javascript
var o1 = {};
var o2 = { bar: 'hello' };

o1.foo = o2;
o1.foo.bar // "hello"
```

上面代码中，对象`o1`的属性`foo`指向对象`o2`，就可以链式引用`o2`的属性。

对象的属性之间用逗号分隔，最后一个属性后面可以加逗号（trailing comma），也可以不加。

```javascript
var obj = {
  p: 123,
  m: function () { ... },
}
```

上面的代码中，`m`属性后面的那个逗号，有没有都可以。

属性可以动态创建，不必在对象声明时就指定。

```javascript
var obj = {};
obj.foo = 123;
obj.foo // 123
```

上面代码中，直接对`obj`对象的`foo`属性赋值，结果就在运行时创建了`foo`属性。

#### 对象的引用

如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量。

```javascript
var o1 = {};
var o2 = o1;

o1.a = 1;
o2.a // 1

o2.b = 2;
o1.b // 2
```

上面代码中，`o1`和`o2`指向同一个对象，因此为其中任何一个变量添加属性，另一个变量都可以读写该属性。

此时，如果取消某一个变量对于原对象的引用，不会影响到另一个变量。

```javascript
var o1 = {};
var o2 = o1;

o1 = 1;
o2 // {}
```

上面代码中，`o1`和`o2`指向同一个对象，然后`o1`的值变为1，这时不会对`o2`产生影响，`o2`还是指向原来的那个对象。

但是，这种引用只局限于对象，如果两个变量指向同一个原始类型的值。那么，变量这时都是值的拷贝。

```javascript
var x = 1;
var y = x;

x = 2;
y // 1
```

上面的代码中，当`x`的值发生变化后，`y`的值并不变，这就表示`y`和`x`并不是指向同一个内存地址。

#### 表达式还是语句？

对象采用大括号表示，这导致了一个问题：如果行首是一个大括号，它到底是表达式还是语句？

```javascript
{ foo: 123 }
```

JavaScript 引擎读到上面这行代码，会发现可能有两种含义。第一种可能是，这是一个表达式，表示一个包含`foo`属性的对象；第二种可能是，这是一个语句，表示一个代码区块，里面有一个标签`foo`，指向表达式`123`。

为了避免这种歧义，JavaScript 引擎的做法是，如果遇到这种情况，无法确定是对象还是代码块，一律解释为代码块。

```javascript
{ console.log(123) } // 123
```

上面的语句是一个代码块，而且只有解释为代码块，才能执行。

如果要解释为对象，最好在大括号前加上圆括号。因为圆括号的里面，只能是表达式，所以确保大括号只能解释为对象。

```javascript
({ foo: 123 }) // 正确
({ console.log(123) }) // 报错
```

这种差异在`eval`语句（作用是对字符串求值）中反映得最明显。

```javascript
eval('{foo: 123}') // 123
eval('({foo: 123})') // {foo: 123}
```

上面代码中，如果没有圆括号，`eval`将其理解为一个代码块；加上圆括号以后，就理解成一个对象。

### 属性的操作

#### 属性的读取

读取对象的属性，有两种方法，一种是使用点运算符，还有一种是使用方括号运算符。

```javascript
var obj = {
  p: 'Hello World'
};

obj.p // "Hello World"
obj['p'] // "Hello World"
```

上面代码分别采用点运算符和方括号运算符，读取属性`p`。

请注意，如果使用方括号运算符，键名必须放在引号里面，否则会被当作变量处理。

```javascript
var foo = 'bar';

var obj = {
  foo: 1,
  bar: 2
};

obj.foo  // 1
obj[foo]  // 2
```

上面代码中，引用对象`obj`的`foo`属性时，如果使用点运算符，`foo`就是字符串；如果使用方括号运算符，但是不使用引号，那么`foo`就是一个变量，指向字符串`bar`。

方括号运算符内部还可以使用表达式。

```javascript
obj['hello' + ' world']
obj[3 + 3]
```

数字键可以不加引号，因为会自动转成字符串。

```javascript
var obj = {
  0.7: 'Hello World'
};

obj['0.7'] // "Hello World"
obj[0.7] // "Hello World"
```

上面代码中，对象`obj`的数字键`0.7`，加不加引号都可以，因为会被自动转为字符串。

注意，数值键名不能使用点运算符（因为会被当成小数点），只能使用方括号运算符。

```javascript
var obj = {
  123: 'hello world'
};

obj.123 // 报错
obj[123] // "hello world"
```

上面代码的第一个表达式，对数值键名`123`使用点运算符，结果报错。第二个表达式使用方括号运算符，结果就是正确的。

#### 属性的赋值

点运算符和方括号运算符，不仅可以用来读取值，还可以用来赋值。

```javascript
var obj = {};

obj.foo = 'Hello';
obj['bar'] = 'World';
```

上面代码中，分别使用点运算符和方括号运算符，对属性赋值。

JavaScript 允许属性的“后绑定”，也就是说，你可以在任意时刻新增属性，没必要在定义对象的时候，就定义好属性。

```javascript
var obj = { p: 1 };

// 等价于

var obj = {};
obj.p = 1;
```

#### 属性的查看

查看一个对象本身的所有属性，可以使用`Object.keys`方法。

```javascript
var obj = {
  key1: 1,
  key2: 2
};

Object.keys(obj);
// ['key1', 'key2']
```

#### 属性的删除：delete 命令

`delete`命令用于删除对象的属性，删除成功后返回`true`。

```javascript
var obj = { p: 1 };
Object.keys(obj) // ["p"]

delete obj.p // true
obj.p // undefined
Object.keys(obj) // []
```

上面代码中，`delete`命令删除对象`obj`的`p`属性。删除后，再读取`p`属性就会返回`undefined`，而且`Object.keys`方法的返回值也不再包括该属性。

注意，删除一个不存在的属性，`delete`不报错，而且返回`true`。

```javascript
var obj = {};
delete obj.p // true
```

上面代码中，对象`obj`并没有`p`属性，但是`delete`命令照样返回`true`。因此，不能根据`delete`命令的结果，认定某个属性是存在的。

只有一种情况，`delete`命令会返回`false`，那就是该属性存在，且不得删除。

```javascript
var obj = Object.defineProperty({}, 'p', {
  value: 123,
  configurable: false
});

obj.p // 123
delete obj.p // false
```

上面代码之中，对象`obj`的`p`属性是不能删除的，所以`delete`命令返回`false`（关于`Object.defineProperty`方法的介绍，请看《标准库》的 Object 对象一章）。

另外，需要注意的是，`delete`命令只能删除对象本身的属性，无法删除继承的属性（关于继承参见《面向对象编程》章节）。

```javascript
var obj = {};
delete obj.toString // true
obj.toString // function toString() { [native code] }
```

上面代码中，`toString`是对象`obj`继承的属性，虽然`delete`命令返回`true`，但该属性并没有被删除，依然存在。这个例子还说明，即使`delete`返回`true`，该属性依然可能读取到值。

#### 属性是否存在：in 运算符

`in`运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值），如果包含就返回`true`，否则返回`false`。它的左边是一个字符串，表示属性名，右边是一个对象。

```javascript
var obj = { p: 1 };
'p' in obj // true
'toString' in obj // true
```

`in`运算符的一个问题是，它不能识别哪些属性是对象自身的，哪些属性是继承的。就像上面代码中，对象`obj`本身并没有`toString`属性，但是`in`运算符会返回`true`，因为这个属性是继承的。

这时，可以使用对象的`hasOwnProperty`方法判断一下，是否为对象自身的属性。

```javascript
var obj = {};
if ('toString' in obj) {
  console.log(obj.hasOwnProperty('toString')) // false
}
```

#### 属性的遍历：for...in 循环

`for...in`循环用来遍历一个对象的全部属性。

```javascript
var obj = {a: 1, b: 2, c: 3};

for (var i in obj) {
  console.log('键名：', i);
  console.log('键值：', obj[i]);
}
// 键名： a
// 键值： 1
// 键名： b
// 键值： 2
// 键名： c
// 键值： 3
```

`for...in`循环有两个使用注意点。

- 它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。
- 它不仅遍历对象自身的属性，还遍历继承的属性。

举例来说，对象都继承了`toString`属性，但是`for...in`循环不会遍历到这个属性。

```javascript
var obj = {};

// toString 属性是存在的
obj.toString // toString() { [native code] }

for (var p in obj) {
  console.log(p);
} // 没有任何输出
```

上面代码中，对象`obj`继承了`toString`属性，该属性不会被`for...in`循环遍历到，因为它默认是“不可遍历”的。关于对象属性的可遍历性，参见《标准库》章节中 Object 一章的介绍。

如果继承的属性是可遍历的，那么就会被`for...in`循环遍历到。但是，一般情况下，都是只想遍历对象自身的属性，所以使用`for...in`的时候，应该结合使用`hasOwnProperty`方法，在循环内部判断一下，某个属性是否为对象自身的属性。

```javascript
var person = { name: '老张' };

for (var key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}
// name
```

### with 语句

`with`语句的格式如下：

```javascript
with (对象) {
  语句;
}
```

它的作用是操作同一个对象的多个属性时，提供一些书写的方便。

```javascript
// 例一
var obj = {
  p1: 1,
  p2: 2,
};
with (obj) {
  p1 = 4;
  p2 = 5;
}
// 等同于
obj.p1 = 4;
obj.p2 = 5;

// 例二
with (document.links[0]){
  console.log(href);
  console.log(title);
  console.log(style);
}
// 等同于
console.log(document.links[0].href);
console.log(document.links[0].title);
console.log(document.links[0].style);
```

注意，如果`with`区块内部有变量的赋值操作，必须是当前对象已经存在的属性，否则会创造一个当前作用域的全局变量。

```javascript
var obj = {};
with (obj) {
  p1 = 4;
  p2 = 5;
}

obj.p1 // undefined
p1 // 4
```

上面代码中，对象`obj`并没有`p1`属性，对`p1`赋值等于创造了一个全局变量`p1`。正确的写法应该是，先定义对象`obj`的属性`p1`，然后在`with`区块内操作它。

这是因为`with`区块没有改变作用域，它的内部依然是当前作用域。这造成了`with`语句的一个很大的弊病，就是绑定对象不明确。

```javascript
with (obj) {
  console.log(x);
}
```

单纯从上面的代码块，根本无法判断`x`到底是全局变量，还是对象`obj`的一个属性。这非常不利于代码的除错和模块化，编译器也无法对这段代码进行优化，只能留到运行时判断，这就拖慢了运行速度。因此，建议不要使用`with`语句，可以考虑用一个临时变量代替`with`。

```javascript
with(obj1.obj2.obj3) {
  console.log(p1 + p2);
}

// 可以写成
var temp = obj1.obj2.obj3;
console.log(temp.p1 + temp.p2);
```

### 参考链接

- Dr. Axel Rauschmayer，[Object properties in JavaScript](http://www.2ality.com/2012/10/javascript-properties.html)
- Lakshan Perera, [Revisiting JavaScript Objects](http://www.laktek.com/2012/12/29/revisiting-javascript-objects/)
- Angus Croll, [The Secret Life of JavaScript Primitives](http://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)i
- Dr. Axel Rauschmayer, [JavaScript’s with statement and why it’s deprecated](http://www.2ality.com/2011/06/with-statement.html)



## 字符串

### 概述

#### 定义

字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。

```javascript
'abc'
"abc"
```

单引号字符串的内部，可以使用双引号。双引号字符串的内部，可以使用单引号。

```javascript
'key = "value"'
"It's a long journey"
```

上面两个都是合法的字符串。

如果要在单引号字符串的内部，使用单引号，就必须在内部的单引号前面加上反斜杠，用来转义。双引号字符串内部使用双引号，也是如此。

```javascript
'Did she say \'Hello\'?'
// "Did she say 'Hello'?"

"Did she say \"Hello\"?"
// "Did she say "Hello"?"
```

由于 HTML 语言的属性值使用双引号，所以很多项目约定 JavaScript 语言的字符串只使用单引号，本教程遵守这个约定。当然，只使用双引号也完全可以。重要的是坚持使用一种风格，不要一会使用单引号表示字符串，一会又使用双引号表示。

字符串默认只能写在一行内，分成多行将会报错。

```javascript
'a
b
c'
// SyntaxError: Unexpected token ILLEGAL
```

上面代码将一个字符串分成三行，JavaScript 就会报错。

如果长字符串必须分成多行，可以在每一行的尾部使用反斜杠。

```javascript
var longString = 'Long \
long \
long \
string';

longString
// "Long long long string"
```

上面代码表示，加了反斜杠以后，原来写在一行的字符串，可以分成多行书写。但是，输出的时候还是单行，效果与写在同一行完全一样。注意，反斜杠的后面必须是换行符，而不能有其他字符（比如空格），否则会报错。

连接运算符（`+`）可以连接多个单行字符串，将长字符串拆成多行书写，输出的时候也是单行。

```javascript
var longString = 'Long '
  + 'long '
  + 'long '
  + 'string';
```

如果想输出多行字符串，有一种利用多行注释的变通方法。

```javascript
(function () { /*
line 1
line 2
line 3
*/}).toString().split('\n').slice(1, -1).join('\n')
// "line 1
// line 2
// line 3"
```

上面的例子中，输出的字符串就是多行。

#### 转义

反斜杠（\）在字符串内有特殊含义，用来表示一些特殊字符，所以又称为转义符。

需要用反斜杠转义的特殊字符，主要有下面这些。

- `\0` ：null（`\u0000`）
- `\b` ：后退键（`\u0008`）
- `\f` ：换页符（`\u000C`）
- `\n` ：换行符（`\u000A`）
- `\r` ：回车键（`\u000D`）
- `\t` ：制表符（`\u0009`）
- `\v` ：垂直制表符（`\u000B`）
- `\'` ：单引号（`\u0027`）
- `\"` ：双引号（`\u0022`）
- `\\` ：反斜杠（`\u005C`）

上面这些字符前面加上反斜杠，都表示特殊含义。

```javascript
console.log('1\n2')
// 1
// 2
```

上面代码中，`\n`表示换行，输出的时候就分成了两行。

反斜杠还有三种特殊用法。

（1）`\HHH`

反斜杠后面紧跟三个八进制数（`000`到`377`），代表一个字符。`HHH`对应该字符的 Unicode 码点，比如`\251`表示版权符号。显然，这种方法只能输出256种字符。

（2）`\xHH`

`\x`后面紧跟两个十六进制数（`00`到`FF`），代表一个字符。`HH`对应该字符的 Unicode 码点，比如`\xA9`表示版权符号。这种方法也只能输出256种字符。

（3）`\uXXXX`

`\u`后面紧跟四个十六进制数（`0000`到`FFFF`），代表一个字符。`XXXX`对应该字符的 Unicode 码点，比如`\u00A9`表示版权符号。

下面是这三种字符特殊写法的例子。

```javascript
'\251' // "©"
'\xA9' // "©"
'\u00A9' // "©"

'\172' === 'z' // true
'\x7A' === 'z' // true
'\u007A' === 'z' // true
```

如果在非特殊字符前面使用反斜杠，则反斜杠会被省略。

```javascript
'\a'
// "a"
```

上面代码中，`a`是一个正常字符，前面加反斜杠没有特殊含义，反斜杠会被自动省略。

如果字符串的正常内容之中，需要包含反斜杠，则反斜杠前面需要再加一个反斜杠，用来对自身转义。

```javascript
"Prev \\ Next"
// "Prev \ Next"
```

#### 字符串与数组

字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符（位置编号从0开始）。

```javascript
var s = 'hello';
s[0] // "h"
s[1] // "e"
s[4] // "o"

// 直接对字符串使用方括号运算符
'hello'[1] // "e"
```

如果方括号中的数字超过字符串的长度，或者方括号中根本不是数字，则返回`undefined`。

```javascript
'abc'[3] // undefined
'abc'[-1] // undefined
'abc'['x'] // undefined
```

但是，字符串与数组的相似性仅此而已。实际上，无法改变字符串之中的单个字符。

```javascript
var s = 'hello';

delete s[0];
s // "hello"

s[1] = 'a';
s // "hello"

s[5] = '!';
s // "hello"
```

上面代码表示，字符串内部的单个字符无法改变和增删，这些操作会默默地失败。

#### length 属性

`length`属性返回字符串的长度，该属性也是无法改变的。

```javascript
var s = 'hello';
s.length // 5

s.length = 3;
s.length // 5

s.length = 7;
s.length // 5
```

上面代码表示字符串的`length`属性无法改变，但是不会报错。

### 字符集

JavaScript 使用 Unicode 字符集。JavaScript 引擎内部，所有字符都用 Unicode 表示。

JavaScript 不仅以 Unicode 储存字符，还允许直接在程序中使用 Unicode 码点表示字符，即将字符写成`\uxxxx`的形式，其中`xxxx`代表该字符的 Unicode 码点。比如，`\u00A9`代表版权符号。

```javascript
var s = '\u00A9';
s // "©"
```

解析代码的时候，JavaScript 会自动识别一个字符是字面形式表示，还是 Unicode 形式表示。输出给用户的时候，所有字符都会转成字面形式。

```javascript
var f\u006F\u006F = 'abc';
foo // "abc"
```

上面代码中，第一行的变量名`foo`是 Unicode 形式表示，第二行是字面形式表示。JavaScript 会自动识别。

我们还需要知道，每个字符在 JavaScript 内部都是以16位（即2个字节）的 UTF-16 格式储存。也就是说，JavaScript 的单位字符长度固定为16位长度，即2个字节。

但是，UTF-16 有两种长度：对于码点在`U+0000`到`U+FFFF`之间的字符，长度为16位（即2个字节）；对于码点在`U+10000`到`U+10FFFF`之间的字符，长度为32位（即4个字节），而且前两个字节在`0xD800`到`0xDBFF`之间，后两个字节在`0xDC00`到`0xDFFF`之间。举例来说，码点`U+1D306`对应的字符为`𝌆，`它写成 UTF-16 就是`0xD834 0xDF06`。

JavaScript 对 UTF-16 的支持是不完整的，由于历史原因，只支持两字节的字符，不支持四字节的字符。这是因为 JavaScript 第一版发布的时候，Unicode 的码点只编到`U+FFFF`，因此两字节足够表示了。后来，Unicode 纳入的字符越来越多，出现了四字节的编码。但是，JavaScript 的标准此时已经定型了，统一将字符长度限制在两字节，导致无法识别四字节的字符。上一节的那个四字节字符`𝌆`，浏览器会正确识别这是一个字符，但是 JavaScript 无法识别，会认为这是两个字符。

```javascript
'𝌆'.length // 2
```

上面代码中，JavaScript 认为`𝌆`的长度为2，而不是1。

总结一下，对于码点在`U+10000`到`U+10FFFF`之间的字符，JavaScript 总是认为它们是两个字符（`length`属性为2）。所以处理的时候，必须把这一点考虑在内，也就是说，JavaScript 返回的字符串长度可能是不正确的。

### Base64 转码

有时，文本里面包含一些不可打印的符号，比如 ASCII 码0到31的符号都无法打印出来，这时可以使用 Base64 编码，将它们转成可以打印的字符。另一个场景是，有时需要以文本格式传递二进制数据，那么也可以使用 Base64 编码。

所谓 Base64 就是一种编码方法，可以将任意值转成 0～9、A～Z、a-z、`+`和`/`这64个字符组成的可打印字符。使用它的主要目的，不是为了加密，而是为了不出现特殊字符，简化程序的处理。

JavaScript 原生提供两个 Base64 相关的方法。

- `btoa()`：任意值转为 Base64 编码
- `atob()`：Base64 编码转为原来的值

```javascript
var string = 'Hello World!';
btoa(string) // "SGVsbG8gV29ybGQh"
atob('SGVsbG8gV29ybGQh') // "Hello World!"
```

注意，这两个方法不适合非 ASCII 码的字符，会报错。

```javascript
btoa('你好') // 报错
```

要将非 ASCII 码字符转为 Base64 编码，必须中间插入一个转码环节，再使用这两个方法。

```javascript
function b64Encode(str) {
  return btoa(encodeURIComponent(str));
}

function b64Decode(str) {
  return decodeURIComponent(atob(str));
}

b64Encode('你好') // "JUU0JUJEJUEwJUU1JUE1JUJE"
b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE') // "你好"
```

### 参考链接

- Mathias Bynens, [JavaScript’s internal character encoding: UCS-2 or UTF-16?](http://mathiasbynens.be/notes/javascript-encoding)
- Mathias Bynens, [JavaScript has a Unicode problem](http://mathiasbynens.be/notes/javascript-unicode)
- Mozilla Developer Network, [Window.btoa](https://developer.mozilla.org/en-US/docs/Web/API/Window.btoa)



## null, undefined 和布尔值

### null 和 undefined

#### 概述

`null`与`undefined`都可以表示“没有”，含义非常相似。将一个变量赋值为`undefined`或`null`，老实说，语法效果几乎没区别。

```javascript
var a = undefined;
// 或者
var a = null;
```

上面代码中，变量`a`分别被赋值为`undefined`和`null`，这两种写法的效果几乎等价。

在`if`语句中，它们都会被自动转为`false`，相等运算符（`==`）甚至直接报告两者相等。

```javascript
if (!undefined) {
  console.log('undefined is false');
}
// undefined is false

if (!null) {
  console.log('null is false');
}
// null is false

undefined == null
// true
```

从上面代码可见，两者的行为是何等相似！谷歌公司开发的 JavaScript 语言的替代品 Dart 语言，就明确规定只有`null`，没有`undefined`！

既然含义与用法都差不多，为什么要同时设置两个这样的值，这不是无端增加复杂度，令初学者困扰吗？这与历史原因有关。

1995年 JavaScript 诞生时，最初像 Java 一样，只设置了`null`表示"无"。根据 C 语言的传统，`null`可以自动转为`0`。

```javascript
Number(null) // 0
5 + null // 5
```

上面代码中，`null`转为数字时，自动变成0。

但是，JavaScript 的设计者 Brendan Eich，觉得这样做还不够。首先，第一版的 JavaScript 里面，`null`就像在 Java 里一样，被当成一个对象，Brendan Eich 觉得表示“无”的值最好不是对象。其次，那时的 JavaScript 不包括错误处理机制，Brendan Eich 觉得，如果`null`自动转为0，很不容易发现错误。

因此，他又设计了一个`undefined`。区别是这样的：`null`是一个表示“空”的对象，转为数值时为`0`；`undefined`是一个表示"此处无定义"的原始值，转为数值时为`NaN`。

```javascript
Number(undefined) // NaN
5 + undefined // NaN
```

#### 用法和含义

对于`null`和`undefined`，大致可以像下面这样理解。

`null`表示空值，即该处的值现在为空。调用函数时，某个参数未设置任何值，这时就可以传入`null`，表示该参数为空。比如，某个函数接受引擎抛出的错误作为参数，如果运行过程中未出错，那么这个参数就会传入`null`，表示未发生错误。

`undefined`表示“未定义”，下面是返回`undefined`的典型场景。

```javascript
// 变量声明了，但没有赋值
var i;
i // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
f() // undefined

// 对象没有赋值的属性
var  o = new Object();
o.p // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
f() // undefined
```

### 布尔值

布尔值代表“真”和“假”两个状态。“真”用关键字`true`表示，“假”用关键字`false`表示。布尔值只有这两个值。

下列运算符会返回布尔值：

- 前置逻辑运算符： `!` (Not)
- 相等运算符：`===`，`!==`，`==`，`!=`
- 比较运算符：`>`，`>=`，`<`，`<=`

如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为`false`，其他值都视为`true`。

- `undefined`
- `null`
- `false`
- `0`
- `NaN`
- `""`或`''`（空字符串）

布尔值往往用于程序流程的控制，请看一个例子。

```javascript
if ('') {
  console.log('true');
}
// 没有任何输出
```

上面代码中，`if`命令后面的判断条件，预期应该是一个布尔值，所以 JavaScript 自动将空字符串，转为布尔值`false`，导致程序不会进入代码块，所以没有任何输出。

注意，空数组（`[]`）和空对象（`{}`）对应的布尔值，都是`true`。

```javascript
if ([]) {
  console.log('true');
}
// true

if ({}) {
  console.log('true');
}
// true
```

更多关于数据类型转换的介绍，参见《数据类型转换》一章。

### 参考链接

- Axel Rauschmayer, [Categorizing values in JavaScript](http://www.2ality.com/2013/01/categorizing-values.html)



## 数值

### 概述

#### 整数和浮点数

JavaScript 内部，所有数字都是以64位浮点数形式储存，即使整数也是如此。所以，`1`与`1.0`是相同的，是同一个数。

```javascript
1 === 1.0 // true
```

这就是说，JavaScript 语言的底层根本没有整数，所有数字都是小数（64位浮点数）。容易造成混淆的是，某些运算只有整数才能完成，此时 JavaScript 会自动把64位浮点数，转成32位整数，然后再进行运算，参见《运算符》一章的“位运算”部分。

由于浮点数不是精确的值，所以涉及小数的比较和运算要特别小心。

```javascript
0.1 + 0.2 === 0.3
// false

0.3 / 0.1
// 2.9999999999999996

(0.3 - 0.2) === (0.2 - 0.1)
// false
```

#### 数值精度

根据国际标准 IEEE 754，JavaScript 浮点数的64个二进制位，从最左边开始，是这样组成的。

- 第1位：符号位，`0`表示正数，`1`表示负数
- 第2位到第12位（共11位）：指数部分
- 第13位到第64位（共52位）：小数部分（即有效数字）

符号位决定了一个数的正负，指数部分决定了数值的大小，小数部分决定了数值的精度。

指数部分一共有11个二进制位，因此大小范围就是0到2047。IEEE 754 规定，如果指数部分的值在0到2047之间（不含两个端点），那么有效数字的第一位默认总是1，不保存在64位浮点数之中。也就是说，有效数字这时总是`1.xx...xx`的形式，其中`xx..xx`的部分保存在64位浮点数之中，最长可能为52位。因此，JavaScript 提供的有效数字最长为53个二进制位。

```
(-1)^符号位 * 1.xx...xx * 2^指数部分
```

上面公式是正常情况下（指数部分在0到2047之间），一个数在 JavaScript 内部实际的表示形式。

精度最多只能到53个二进制位，这意味着，绝对值小于2的53次方的整数，即-2<sup>53</sup>到2<sup>53</sup>，都可以精确表示。

```javascript
Math.pow(2, 53)
// 9007199254740992

Math.pow(2, 53) + 1
// 9007199254740992

Math.pow(2, 53) + 2
// 9007199254740994

Math.pow(2, 53) + 3
// 9007199254740996

Math.pow(2, 53) + 4
// 9007199254740996
```

上面代码中，大于2的53次方以后，整数运算的结果开始出现错误。所以，大于2的53次方的数值，都无法保持精度。由于2的53次方是一个16位的十进制数值，所以简单的法则就是，JavaScript 对15位的十进制数都可以精确处理。

```javascript
Math.pow(2, 53)
// 9007199254740992

// 多出的三个有效数字，将无法保存
9007199254740992111
// 9007199254740992000
```

上面示例表明，大于2的53次方以后，多出来的有效数字（最后三位的`111`）都会无法保存，变成0。

#### 数值范围

根据标准，64位浮点数的指数部分的长度是11个二进制位，意味着指数部分的最大值是2047（2的11次方减1）。也就是说，64位浮点数的指数部分的值最大为2047，分出一半表示负数，则 JavaScript 能够表示的数值范围为2<sup>1024</sup>到2<sup>-1023</sup>（开区间），超出这个范围的数无法表示。

如果一个数大于等于2的1024次方，那么就会发生“正向溢出”，即 JavaScript 无法表示这么大的数，这时就会返回`Infinity`。

```javascript
Math.pow(2, 1024) // Infinity
```

如果一个数小于等于2的-1075次方（指数部分最小值-1023，再加上小数部分的52位），那么就会发生为“负向溢出”，即 JavaScript 无法表示这么小的数，这时会直接返回0。

```javascript
Math.pow(2, -1075) // 0
```

下面是一个实际的例子。

```javascript
var x = 0.5;

for(var i = 0; i < 25; i++) {
  x = x * x;
}

x // 0
```

上面代码中，对`0.5`连续做25次平方，由于最后结果太接近0，超出了可表示的范围，JavaScript 就直接将其转为0。

JavaScript 提供`Number`对象的`MAX_VALUE`和`MIN_VALUE`属性，返回可以表示的具体的最大值和最小值。

```javascript
Number.MAX_VALUE // 1.7976931348623157e+308
Number.MIN_VALUE // 5e-324
```

### 数值的表示法

JavaScript 的数值有多种表示方法，可以用字面形式直接表示，比如`35`（十进制）和`0xFF`（十六进制）。

数值也可以采用科学计数法表示，下面是几个科学计数法的例子。

```javascript
123e3 // 123000
123e-3 // 0.123
-3.1E+12
.1e-23
```

科学计数法允许字母`e`或`E`的后面，跟着一个整数，表示这个数值的指数部分。

以下两种情况，JavaScript 会自动将数值转为科学计数法表示，其他情况都采用字面形式直接表示。

**（1）小数点前的数字多于21位。**

```javascript
1234567890123456789012
// 1.2345678901234568e+21

123456789012345678901
// 123456789012345680000
```

**（2）小数点后的零多于5个。**

```javascript
// 小数点后紧跟5个以上的零，
// 就自动转为科学计数法
0.0000003 // 3e-7

// 否则，就保持原来的字面形式
0.000003 // 0.000003
```

### 数值的进制

使用字面量（literal）直接表示一个数值时，JavaScript 对整数提供四种进制的表示方法：十进制、十六进制、八进制、二进制。

- 十进制：没有前导0的数值。
- 八进制：有前缀`0o`或`0O`的数值，或者有前导0、且只用到0-7的八个阿拉伯数字的数值。
- 十六进制：有前缀`0x`或`0X`的数值。
- 二进制：有前缀`0b`或`0B`的数值。

默认情况下，JavaScript 内部会自动将八进制、十六进制、二进制转为十进制。下面是一些例子。

```javascript
0xff // 255
0o377 // 255
0b11 // 3
```

如果八进制、十六进制、二进制的数值里面，出现不属于该进制的数字，就会报错。

```javascript
0xzz // 报错
0o88 // 报错
0b22 // 报错
```

上面代码中，十六进制出现了字母`z`、八进制出现数字`8`、二进制出现数字`2`，因此报错。

通常来说，有前导0的数值会被视为八进制，但是如果前导0后面有数字`8`和`9`，则该数值被视为十进制。

```javascript
0888 // 888
0777 // 511
```

前导0表示八进制，处理时很容易造成混乱。ES5 的严格模式和 ES6，已经废除了这种表示法，但是浏览器为了兼容以前的代码，目前还继续支持这种表示法。

### 特殊数值

JavaScript 提供了几个特殊的数值。

#### 正零和负零

前面说过，JavaScript 的64位浮点数之中，有一个二进制位是符号位。这意味着，任何一个数都有一个对应的负值，就连`0`也不例外。

JavaScript 内部实际上存在2个`0`：一个是`+0`，一个是`-0`，区别就是64位浮点数表示法的符号位不同。它们是等价的。

```javascript
-0 === +0 // true
0 === -0 // true
0 === +0 // true
```

几乎所有场合，正零和负零都会被当作正常的`0`。

```javascript
+0 // 0
-0 // 0
(-0).toString() // '0'
(+0).toString() // '0'
```

唯一有区别的场合是，`+0`或`-0`当作分母，返回的值是不相等的。

```javascript
(1 / +0) === (1 / -0) // false
```

上面的代码之所以出现这样结果，是因为除以正零得到`+Infinity`，除以负零得到`-Infinity`，这两者是不相等的（关于`Infinity`详见下文）。

#### NaN

**（1）含义**

`NaN`是 JavaScript 的特殊值，表示“非数字”（Not a Number），主要出现在将字符串解析成数字出错的场合。

```javascript
5 - 'x' // NaN
```

上面代码运行时，会自动将字符串`x`转为数值，但是由于`x`不是数值，所以最后得到结果为`NaN`，表示它是“非数字”（`NaN`）。

另外，一些数学函数的运算结果会出现`NaN`。

```javascript
Math.acos(2) // NaN
Math.log(-1) // NaN
Math.sqrt(-1) // NaN
```

`0`除以`0`也会得到`NaN`。

```javascript
0 / 0 // NaN
```

需要注意的是，`NaN`不是独立的数据类型，而是一个特殊数值，它的数据类型依然属于`Number`，使用`typeof`运算符可以看得很清楚。

```javascript
typeof NaN // 'number'
```

**（2）运算规则**

`NaN`不等于任何值，包括它本身。

```javascript
NaN === NaN // false
```

数组的`indexOf`方法内部使用的是严格相等运算符，所以该方法对`NaN`不成立。

```javascript
[NaN].indexOf(NaN) // -1
```

`NaN`在布尔运算时被当作`false`。

```javascript
Boolean(NaN) // false
```

`NaN`与任何数（包括它自己）的运算，得到的都是`NaN`。

```javascript
NaN + 32 // NaN
NaN - 32 // NaN
NaN * 32 // NaN
NaN / 32 // NaN
```

#### Infinity

**（1）含义**

`Infinity`表示“无穷”，用来表示两种场景。一种是一个正的数值太大，或一个负的数值太小，无法表示；另一种是非0数值除以0，得到`Infinity`。

```javascript
// 场景一
Math.pow(2, 1024)
// Infinity

// 场景二
0 / 0 // NaN
1 / 0 // Infinity
```

上面代码中，第一个场景是一个表达式的计算结果太大，超出了能够表示的范围，因此返回`Infinity`。第二个场景是`0`除以`0`会得到`NaN`，而非0数值除以`0`，会返回`Infinity`。

`Infinity`有正负之分，`Infinity`表示正的无穷，`-Infinity`表示负的无穷。

```javascript
Infinity === -Infinity // false

1 / -0 // -Infinity
-1 / -0 // Infinity
```

上面代码中，非零正数除以`-0`，会得到`-Infinity`，负数除以`-0`，会得到`Infinity`。

由于数值正向溢出（overflow）、负向溢出（underflow）和被`0`除，JavaScript 都不报错，所以单纯的数学运算几乎没有可能抛出错误。

`Infinity`大于一切数值（除了`NaN`），`-Infinity`小于一切数值（除了`NaN`）。

```javascript
Infinity > 1000 // true
-Infinity < -1000 // true
```

`Infinity`与`NaN`比较，总是返回`false`。

```javascript
Infinity > NaN // false
-Infinity > NaN // false

Infinity < NaN // false
-Infinity < NaN // false
```

**（2）运算规则**

`Infinity`的四则运算，符合无穷的数学计算规则。

```javascript
5 * Infinity // Infinity
5 - Infinity // -Infinity
Infinity / 5 // Infinity
5 / Infinity // 0
```

0乘以`Infinity`，返回`NaN`；0除以`Infinity`，返回`0`；`Infinity`除以0，返回`Infinity`。

```javascript
0 * Infinity // NaN
0 / Infinity // 0
Infinity / 0 // Infinity
```

`Infinity`加上或乘以`Infinity`，返回的还是`Infinity`。

```javascript
Infinity + Infinity // Infinity
Infinity * Infinity // Infinity
```

`Infinity`减去或除以`Infinity`，得到`NaN`。

```javascript
Infinity - Infinity // NaN
Infinity / Infinity // NaN
```

`Infinity`与`null`计算时，`null`会转成0，等同于与`0`的计算。

```javascript
null * Infinity // NaN
null / Infinity // 0
Infinity / null // Infinity
```

`Infinity`与`undefined`计算，返回的都是`NaN`。

```javascript
undefined + Infinity // NaN
undefined - Infinity // NaN
undefined * Infinity // NaN
undefined / Infinity // NaN
Infinity / undefined // NaN
```

### 与数值相关的全局方法

#### parseInt()

**（1）基本用法**

`parseInt`方法用于将字符串转为整数。

```javascript
parseInt('123') // 123
```

如果字符串头部有空格，空格会被自动去除。

```javascript
parseInt('   81') // 81
```

如果`parseInt`的参数不是字符串，则会先转为字符串再转换。

```javascript
parseInt(1.23) // 1
// 等同于
parseInt('1.23') // 1
```

字符串转为整数的时候，是一个个字符依次转换，如果遇到不能转为数字的字符，就不再进行下去，返回已经转好的部分。

```javascript
parseInt('8a') // 8
parseInt('12**') // 12
parseInt('12.34') // 12
parseInt('15e2') // 15
parseInt('15px') // 15
```

上面代码中，`parseInt`的参数都是字符串，结果只返回字符串头部可以转为数字的部分。

如果字符串的第一个字符不能转化为数字（后面跟着数字的正负号除外），返回`NaN`。

```javascript
parseInt('abc') // NaN
parseInt('.3') // NaN
parseInt('') // NaN
parseInt('+') // NaN
parseInt('+1') // 1
```

所以，`parseInt`的返回值只有两种可能，要么是一个十进制整数，要么是`NaN`。

如果字符串以`0x`或`0X`开头，`parseInt`会将其按照十六进制数解析。

```javascript
parseInt('0x10') // 16
```

如果字符串以`0`开头，将其按照10进制解析。

```javascript
parseInt('011') // 11
```

对于那些会自动转为科学计数法的数字，`parseInt`会将科学计数法的表示方法视为字符串，因此导致一些奇怪的结果。

```javascript
parseInt(1000000000000000000000.5) // 1
// 等同于
parseInt('1e+21') // 1

parseInt(0.0000008) // 8
// 等同于
parseInt('8e-7') // 8
```

**（2）进制转换**

`parseInt`方法还可以接受第二个参数（2到36之间），表示被解析的值的进制，返回该值对应的十进制数。默认情况下，`parseInt`的第二个参数为10，即默认是十进制转十进制。

```javascript
parseInt('1000') // 1000
// 等同于
parseInt('1000', 10) // 1000
```

下面是转换指定进制的数的例子。

```javascript
parseInt('1000', 2) // 8
parseInt('1000', 6) // 216
parseInt('1000', 8) // 512
```

上面代码中，二进制、六进制、八进制的`1000`，分别等于十进制的8、216和512。这意味着，可以用`parseInt`方法进行进制的转换。

如果第二个参数不是数值，会被自动转为一个整数。这个整数只有在2到36之间，才能得到有意义的结果，超出这个范围，则返回`NaN`。如果第二个参数是`0`、`undefined`和`null`，则直接忽略。

```javascript
parseInt('10', 37) // NaN
parseInt('10', 1) // NaN
parseInt('10', 0) // 10
parseInt('10', null) // 10
parseInt('10', undefined) // 10
```

如果字符串包含对于指定进制无意义的字符，则从最高位开始，只返回可以转换的数值。如果最高位无法转换，则直接返回`NaN`。

```javascript
parseInt('1546', 2) // 1
parseInt('546', 2) // NaN
```

上面代码中，对于二进制来说，`1`是有意义的字符，`5`、`4`、`6`都是无意义的字符，所以第一行返回1，第二行返回`NaN`。

前面说过，如果`parseInt`的第一个参数不是字符串，会被先转为字符串。这会导致一些令人意外的结果。

```javascript
parseInt(0x11, 36) // 43
parseInt(0x11, 2) // 1

// 等同于
parseInt(String(0x11), 36)
parseInt(String(0x11), 2)

// 等同于
parseInt('17', 36)
parseInt('17', 2)
```

上面代码中，十六进制的`0x11`会被先转为十进制的17，再转为字符串。然后，再用36进制或二进制解读字符串`17`，最后返回结果`43`和`1`。

这种处理方式，对于八进制的前缀0，尤其需要注意。

```javascript
parseInt(011, 2) // NaN

// 等同于
parseInt(String(011), 2)

// 等同于
parseInt(String(9), 2)
```

上面代码中，第一行的`011`会被先转为字符串`9`，因为`9`不是二进制的有效字符，所以返回`NaN`。如果直接计算`parseInt('011', 2)`，`011`则是会被当作二进制处理，返回3。

JavaScript 不再允许将带有前缀0的数字视为八进制数，而是要求忽略这个`0`。但是，为了保证兼容性，大部分浏览器并没有部署这一条规定。

#### parseFloat()

`parseFloat`方法用于将一个字符串转为浮点数。

```javascript
parseFloat('3.14') // 3.14
```

如果字符串符合科学计数法，则会进行相应的转换。

```javascript
parseFloat('314e-2') // 3.14
parseFloat('0.0314E+2') // 3.14
```

如果字符串包含不能转为浮点数的字符，则不再进行往后转换，返回已经转好的部分。

```javascript
parseFloat('3.14more non-digit characters') // 3.14
```

`parseFloat`方法会自动过滤字符串前导的空格。

```javascript
parseFloat('\t\v\r12.34\n ') // 12.34
```

如果参数不是字符串，或者字符串的第一个字符不能转化为浮点数，则返回`NaN`。

```javascript
parseFloat([]) // NaN
parseFloat('FF2') // NaN
parseFloat('') // NaN
```

上面代码中，尤其值得注意，`parseFloat`会将空字符串转为`NaN`。

这些特点使得`parseFloat`的转换结果不同于`Number`函数。

```javascript
parseFloat(true)  // NaN
Number(true) // 1

parseFloat(null) // NaN
Number(null) // 0

parseFloat('') // NaN
Number('') // 0

parseFloat('123.45#') // 123.45
Number('123.45#') // NaN
```

#### isNaN()

`isNaN`方法可以用来判断一个值是否为`NaN`。

```javascript
isNaN(NaN) // true
isNaN(123) // false
```

但是，`isNaN`只对数值有效，如果传入其他值，会被先转成数值。比如，传入字符串的时候，字符串会被先转成`NaN`，所以最后返回`true`，这一点要特别引起注意。也就是说，`isNaN`为`true`的值，有可能不是`NaN`，而是一个字符串。

```javascript
isNaN('Hello') // true
// 相当于
isNaN(Number('Hello')) // true
```

出于同样的原因，对于对象和数组，`isNaN`也返回`true`。

```javascript
isNaN({}) // true
// 等同于
isNaN(Number({})) // true

isNaN(['xzy']) // true
// 等同于
isNaN(Number(['xzy'])) // true
```

但是，对于空数组和只有一个数值成员的数组，`isNaN`返回`false`。

```javascript
isNaN([]) // false
isNaN([123]) // false
isNaN(['123']) // false
```

上面代码之所以返回`false`，原因是这些数组能被`Number`函数转成数值，请参见《数据类型转换》一章。

因此，使用`isNaN`之前，最好判断一下数据类型。

```javascript
function myIsNaN(value) {
  return typeof value === 'number' && isNaN(value);
}
```

判断`NaN`更可靠的方法是，利用`NaN`为唯一不等于自身的值的这个特点，进行判断。

```javascript
function myIsNaN(value) {
  return value !== value;
}
```

#### isFinite()

`isFinite`方法返回一个布尔值，表示某个值是否为正常的数值。

```javascript
isFinite(Infinity) // false
isFinite(-Infinity) // false
isFinite(NaN) // false
isFinite(undefined) // false
isFinite(null) // true
isFinite(-1) // true
```

除了`Infinity`、`-Infinity`、`NaN`和`undefined`这几个值会返回`false`，`isFinite`对于其他的数值都会返回`true`。

### 参考链接

- Dr. Axel Rauschmayer, [How numbers are encoded in JavaScript](http://www.2ality.com/2012/04/number-encoding.html)
- Humphry, [JavaScript 中 Number 的一些表示上/下限](http://blog.segmentfault.com/humphry/1190000000407658)

## 内置对象介绍

```js
☞  JavaScript组成：   ECMAScript  |   DOM   |  BOM

☞  ECMAScript：  变量 ， 函数， 数据类型 ，流程控制，内置对象。。。

☞  js中的对象： 自定义对象 ， 内置对象 ， 浏览器对象（不属于ECMAScript）

☞  Math对象，Array对象，Date对象。。。。

☞ 通过查文档学习内置对象   MDN  (https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
```



### MDN介绍

```js
 MDN: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript
```

### Math对象

```js
 ☞ 提供了一系列与数学相关的方法或属性  ( 静态  |  实例)

  ☞ Math.PI          获取圆周率【属性】
  ☞ Math.random()    返回大于等于0小于1之间的随机数 [灵活使用]

  ☞ Math.floor() 	   向下取整，返回一个小于当前数字的整数
  ☞ Math.ceil()	     向上取整，返回一个大于当前数字的整数

  ☞ Math.round()     四舍五入（小数如果小于0.5,返回小于当前数字的整数，如果小数部分大于0.5返回大于当前数字的一个整数）
  ☞ Math.abs()		   取绝对值（返回当前数字的绝对值，正整数）

  ☞ Math.max()       返回一组数中的最大值 （可以设置多个参数，返回其中最大值，参数不可以是数组）
  ☞ Math.min()       返回一组数中的最小值 （可以同时设置多个参数，与最大值效果一样）

  ☞ Math.sin(x)	     返回一个正弦的三角函数 ( 注意： x 是一个以弧度为单位的角度)
  ☞ Math.cos(x)	     返回一个余弦的三角函数 （注意： x 参数是一个以弧度为单位的角度）

  ☞ Math.pow(x,y)	 返回x的y次幂
  求任意两个数之间的随机数 Math.floor(Math.random() * (大数 - 小数 +１)　+ 小数);
```



### 静态成员和实例成员

```js
☞静态成员：
 	    1. 不需要通过构造函数创建对象且能访问对象中的属性或方法
 ☞实例成员：
    	1.  首先必须通过构造函数创建对象
      2.  通过构造函数创建对象并访问的属性或方法[实例成员]
```



### Date对象

```js
☞ Date是一个构造函数，必须通过 new Date() 创建一个对象，实例成员才能使用

☞ 用法一：空构造函数
   var d = new Date();
   ☞GMT 格林威治时间（0时区）

☞ 用法二： 传入日期格式的字符串
  var  d = new Date("1988-8-8")

☞ 用法三： 传入数字
  var  d = new Date(year, month[,day,time,second]);  //必须设置年和月
  备注： 月份从0 开始， 0 代表1月

用法四：
	var d = new Date(数字);
☞ 获取当前时间的毫秒值：
	d.valueOf()
    d.getTime()  // 推荐使用
    Date.now()   //H5 新方法 有兼容信息

通过H5提供的方法操作 多媒体标签
http://www.w3school.com.cn/html5/html5_ref_audio_video_dom.asp
```



### Date中的方法

```js
☞ 日期格式化方法
var d = new Date();
    d.toString();  //转化成字符串
    d.toDateString();  //转换成日期字符串
    d.toTimeString();  //转换成时间字符串
    d.toLocaleDateString();   //返回本地的日期格式  （不同浏览器不同效果）
    d.toLocaleTimeString();   //返回本地的时间格式  （不同浏览器不同效果）
	  d.toLocaleString()；//本地时间日期格式

☞ 获取日期其他部分(掌握)
	  d.getSeconds()  //获取秒
    d.getMinutes()  //获取分钟
    d.getHours()    //获取小时
    d.getDay()      //返回周几   （0表示周日）[0,1,2,3,4,5,6]
    d.getDate()     //返回当前月的第几天
    d.getMonth()    //返回月份   （从0开始）[0,1,2,3,4,5,6,7,8,9,10,11]
    d.getFullYear()  //返回年份
	把get改成Set就可以设置【除了getDay不可以改成setDay，其他的都可以】
自学文档
http://www.runoob.com/js/js-obj-date.html

http://www.w3school.com.cn/jsref/jsref_obj_math.asp
```

### 数组对象

```js
☞ 判断变量是不是一个数组    Array.isArray(ary)

☞ toString()   // 把数组转换为字符串，使用逗号分隔
☞ valueOf()   //  返回数组对象本身

var ary = [];
    ary.toString()
    ary.valueOf();

☞ 栈方法（先进后出）
	ary.push() [常用]  // 加入内容返回新数组的长度
	ary.pop() [常用]    //删除数组最后一项并返回

☞ 队列（先进先出）
	  ary.push()
    ary.shift()  //取出数组中的第一个元素，修改数组的长度
    ary.unshift(number)   //在数组中最开始位置添加一个值


☞ 其他方法汇总
	   ◆ reverse()  // 翻转数组
   	 ◆ concat()  //把两个数组拼接到一块,返回一个新数组
		 ◆ slice(startindex, endindex)   //从当前数组中截取一个新的数组
		   ✔ 第一个参数表示开始索引位置,第二个参数代表结束索引位置
		 ◆ splice(startindex, deletCont, options)  //删除或者替换数组中的某些值
		 	 ✔ 第一个参数代表从哪开始删除
       ✔ 第二个参数代表一共删除几个
       ✔ 第三个参数代表要替换的值
		 ◆ indexOf(content[,index])，lastIndexof()   //没找到返回-1
			  ✔ 找数组中的某个值,如果找到返回索引位置,如果没有找到返回-1
			  ✔ lastIndexof()  从数组的末尾开始找,如果找到,返回索引位置,如果没有找到返回-1
		 ◆ Join()   //将数组中的每一个元素通过一个字符链接到一块

案例部分:
 ☞ 将数组中的元素以 “|”链接的方式输出
     var ary = ['张三', '李四', '王五'];
 ☞  将一个数组中的字符串顺序反转  ['a'，'b','c','d'] -> ['d','c','b','a']

 ☞ 将数组中每一个'a' 的位置输出到控制台中 ['a','b','c','d','a','e','f','a','g','h']

//for ()   while()  do  while()

// 当明确循环次数的时候,使用for循环
// 无法确定循环次数的用while循环
```



### 字符串☞ 特性: 不可变性

```js
☞ 字符方法
 	 1. charAt(index)  		//获取指定位置处的字符
   2. str[index]		   //获取指定位置的字符 （H5中的方法）

 ☞ 字符串方法
 	 1. concat()   //拼接字符串  等效于 +
   2. slice(strat,end)       //从指定位置开始，截取字符串到结束位置，end值取不到
   3. substring(start,end)   //从指定位置开始，截取字符串到结束位置， end值取不到
   4. substr(start,length)   //从指定位置开始，截取length长度个字符

  ☞ 位置方法
  	1. indexOf(字符)   //返回字符在字符串中的位置
	  2. lastIndexOf(字符)  //从后往前找，只找第一个匹配的字符

  ☞ 去除空白
  	  trim()      //只能去除字符串前后空白

  ☞ 大小写转换法
  	  toLocaleUpperCase()  //转化为大写
      toLocaleLowerCase()  //转化为小写

  ☞其他
  	 replace(a,b)  // 用b替换a
	   split()   //	以一个分割符,将一个字符串串分割成一个数组
```
