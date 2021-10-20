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