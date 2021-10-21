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

### 区别 2-访问行为不同

&emsp;&emsp;保存原始值的变量按值访问的，保存引用值变量是按引用值访问的，引用值保存的是对象的内存地址，js语言不允许直接访问内存对象，只可以操作引用值。

&emsp;&emsp;原始值变量复制的值是原始值的副本。与原始值互不影响。

``` js
    var num1 = 1
    var num2 = num1

    console.log(`num1 = ${num1}, num2 = ${num2}`)  // num1 = 1, num2 = 1
    num2 = 3 
    console.log(`num1 = ${num1}, num2 = ${num2}`)  // num1 = 1, num2 = 3
```

&emsp;&emsp;引用值变量复制的值是引用值，引用值改变，则引用值变量也会改变。

``` js 

  var obj1 = new Object();
  var obj2 = obj1;

  obj1.name = 'xiaolan'
  console.log(obj1, obj2)

  var obj3 = { name: 'xiaohong' };
  obj1 = obj3
  console.log(obj1, obj2, obj3) 

```

## 区别3-参数传递
&emsp;&emsp;按值传参时，将传参复制给函数内的局部变量。按引用传递，将传入的引用值（内存地址）复制给函数内的局部变量。如果引用值（内存地址）的对象改变，则外部引用该引用值的变量也会感知到变化，因为是从同一内存地址拿到内存对象。

&emsp;&emsp;ECMAScript规定了6中原始值非别是Undefined，Null，Symbol，Boolean，String，Number。使用typeof操作符会返回指定原始值变量的相应原始值的字符串。如果变量是引用变量则使用instanceof判断，instanceof会判断其左侧变量是否为右侧的引用类型，是则返回true，否则false。例如

``` js 
  var str = new String('hello');
  console.log(str instanceof Object)  // true


```