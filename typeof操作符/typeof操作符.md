## typeof 操作符

> 原始值： 就是最简单的数据；
>
> 引用值： 由多个值构成的对象；

&emsp;&emsp;typeof 操作符适合判断一个 js 变量是否为原始值类型。js 的变量分为原始值类型和引用类型。那为什么要区分他俩，他们到底有什么区别。

### 区别 1-动态属性

&emsp;&emsp;引用类型可以随意增删改属性，但是原始值不可以更改值

```js
    var num = 1;
    var obj = { name: "aaa" };

    num.name = "num";
    obj.name = "bbb";
```

### 区别 2-值赋值行为不同

&emsp;&emsp;当新变量赋值时，等号右边为某一原始值变量，则新变量的是原始值变量的副本。与原始值变量互不影响。

``` js
    var num1 = 1
    var num2 = num1

    console.log(`num1 = ${num1}, num2 = ${num2}`)  // num1 = 1, num2 = 1
    num2 = 3 
    console.log(`num1 = ${num1}, num2 = ${num2}`)  // num1 = 1, num2 = 3
```