# Javascript 的 this 用法

作者： [刘洋](https://www.thisliuyang.cn/)

日期： [2016年4月30日](https://www.thisliuyang.cn/)



`this`是 JavaScript 语言的一个关键字。

它是函数运行时，在函数体内部自动生成的一个对象，只能在函数体内部使用。

> ```javascript
> function test() {
> 　this.x = 1;
> }
> ```

上面代码中，函数`test`运行时，内部会自动有一个`this`对象可以使用。

那么，`this`的值是什么呢？

函数的不同使用场合，`this`有不同的值。总的来说，`this`就是函数运行时所在的环境对象。下面分四种情况，详细讨论`this`的用法。

**情况一： 普通函数中this的指向**

这是函数的最通常用法，属于全局性调用，因此`this`就代表全局对象。请看下面这段代码，它的运行结果是1。

> ```javascript
> var x = 1;
> function test() {
>    console.log(this.x);
>    console.log(this);
> }
> test();  // 1   window
> ```

**情况二：作为对象方法的调用**

函数还可以作为某个对象的方法调用，这时`this`就指这个上级对象（调用者）。

> ```javascript
> function test() {
>   console.log(this.x);
> }
> 
> var obj = {};
> obj.x = 1;
> obj.m = test;
> 
> obj.m(); // 1
> ```

**情况三 作为构造函数调用**

所谓构造函数，就是通过这个函数，可以生成一个新对象。这时，`this`就指这个新对象。

> ```javascript
> function test() {
> 　this.x = 1;
> }
> 
> var obj = new test();
> obj.x // 1
> ```

运行结果为1。为了表明这时this不是全局对象，我们对代码做一些改变：

> ```javascript
> var x = 2;
> function test() {
>   this.x = 1;
> }
> 
> var obj = new test();
> x  // 2
> ```

运行结果为2，表明全局变量`x`的值根本没变。

**情况四 定时器中this的指向**

定时器中this的指向window

```javascript
 setTimeout(function(){
    console.log(this);
 },10);
// window
```

**情况五 事件处理程序中this指向**

this指向事件源，事件触发后（函数才会执行）才知道。

```javascript
 // 【事件处理程序→ this指向事件源】
document.onclick = function () {
    console.log(this)
}
// document
```





**情况六 改变this指向**

- call方法

  - 语法 ： 函数名.call(调用者，参数1...)
  - 作用 ： 函数被借用时，会立刻执行，并且函数体内this会指向借用者或者调用者

  ```javascript
  // 定义一个函数
  function fn(name, age) {
      this.name = name;
      this.age = age;
  }
  // 定义一个自己的对象
  var obj = {};   // 字面量
  fn.call(obj, '李四', 10);
  ```

- apply方法

  - 语法 ： 函数名.apply(调用者，[参数一...])
  - 作用 ： 函数被借用时，会立即执行，并且函数体内的this会指向借用者或调用者

  ```javascript
  // 定义一个函数
  function fn(name, age) {
      this.name = name;
      this.age = age;
  }
  // 定义一个自己的对象
  var obj = {};   // 字面量
  fn.apply(obj, ['李四', 10]);
  ```

- bind 方法

  - 语法 ：函数名.bind(调用者，参数1...)
  - 作用 ： 函数被借用时，不会立即执行，而是返回一个新的函数。需要自己手动调用新的函数。

  ```javascript
   // 定义一个函数
  function fn(name, age) {
      this.name = name;
      this.age = age;
  }
  // 定义一个自己的对象
  var obj = {};   // 字面量
  fn.bind(obj, '李四', 10)();
  ```



（完） 