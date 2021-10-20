/**
 *   typeof 判断一个变量是否为原始值类型
 * 
 */

function separator() {
    console.log('===============分割线==================')
}

separator()

var num = 1
var obj = { name: 'aaa' }

num.name = 'num'
obj.name = 'bbb'

console.log(num.name, obj.name)  // undefined, bbb

separator()

/**
 *  猜想1： num2传递的是num1原值
 *   之前： num1 = 1， num2 = 1
 *   之后： num1 = 3， num2 = 3
 * 
 * 猜想2： num2是num1的副本，两者互不影响
 *   之前： num1 = 1， num2 = 1
 *   之后： num1 = 1， num2 = 3
 */

var num1 = 1
var num2 = num1

console.log(`num1 = ${num1}, num2 = ${num2}`)  // num1 = 1, num2 = 1
num2 = 3 
console.log(`num1 = ${num1}, num2 = ${num2}`)  // num1 = 1, num2 = 3


separator()

/**
 * 引用值复制值时，会把引用值复制给新变量，由于引用是指向变量在内存中的地址，所以新变量和被复制的变量都指向同一内存变量，当属性发生变化时，两个引用值变量仍然相等
 */
var obj1 = new Object()
var obj2 = obj1

console.log(obj1, obj2)

obj1.name = 'xiaoli'
console.log(obj1, obj2)

separator()

var obj3 = new Object({name: 'xiaohong'})
obj2 = obj1 = obj3

console.log(obj1, obj2, obj3)

obj1.name = 'xiaowang'

console.log(obj1, obj2, obj3)