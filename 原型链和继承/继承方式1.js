// 原型继承

function Person(name) {
  this.name = name;
  
}

Person.prototype.logName = function () {
      console.log(this.name ? this.name : '')
  }

var p1 = new Person('zhangsan')

console.log(p1)

p1.logName ? p1.logName() : ''

function Cooker(name) {
  this.name = name
  this.cook = function () {
      console.log(this.name + ' is cooking')
  }
}

Cooker.prototype = new Person()
Cooker.prototype.constructor = Person

var cooker = new Cooker('lisi')

cooker.cook()
cooker.logName()
