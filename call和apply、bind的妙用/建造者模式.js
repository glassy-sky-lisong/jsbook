// 为数组添加一个add函数，并且add函数可以链式使用

var demoArr = []

Array.prototype.add = function add(target) {
  this.push(target)
  console.log(this, target)

  return this
}

demoArr.add(1).add(2).add(3).add(4)
