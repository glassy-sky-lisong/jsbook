var obj = {
    name: 'lisi'
}

function cook(a) {
    console.log(`${this.name} cook`, this)
    console.log(a)
    this.run = () => {
        console.log('run')
    }
    this.age = 12
}

var newFunc = cook.bind(obj, 1)
var secondFunc = cook.bind(obj)

// 创建绑定函数未使用new前
console.log('before', obj)


newFunc()
secondFunc(1)

var newFuncObj = new newFunc()

console.log(newFuncObj)

// 绑定函数使用new之后
console.log('after', obj)


newFuncObj.run()

// 绑定函数自动适应于使用 new 操作符去构造一个由目标函数创建的新实例。 
// 当一个绑定函数是用来构建一个值的，原来提供的 this 就会被忽略。
// 不过提供的参数列表仍然会插入到构造函数调用时的参数列表之前。

