function Person(name, age) {
  this.name = name;
  this.age = age
  this.logName = function () {
      console.log(this.name, this.age)
  }
}

function Child(name) {
  Person.call(this, name, 12)

  this.run = function () {
      console.log(`${name} is running`)
  }
}

Child.prototype = Object.create(Person.prototype, {
  constructor: {
      value: Child,
      enumerable: false,
      writable: true,
      configurable: true
  }
})

var child = new Child('lisi')

child.logName()

child.run()

console.log(Reflect.getPrototypeOf(child))