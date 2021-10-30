// 组合继承

function Person(name) {
    this.name = name;
    
  }
  
Person.prototype.logName = function () {
    console.log(this.name ? this.name : '')
}

function Cooker(name) {
    this.cook = function () {
    console.log(this.name + ' is cooking')
    }
    Person.call(this, name)
}

Cooker.prototype = new Person('')

var cooker = new Cooker('lisi')


console.log(cooker, cooker instanceof Person)

cooker.cook()
cooker.logName()

