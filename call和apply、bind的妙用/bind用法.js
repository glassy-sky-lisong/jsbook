var obj = {
    name: 'lisi'
}

function cook(a) {
    console.log(`${this.name} cook`)
    console.log(a)
    this.run = () => {
        console.log('run')
    }
}

var newFunc = cook.bind(obj, 1)
var secondFunc = cook.bind(obj)

// 创建绑定函数未使用new前
console.log('before', obj)


newFunc()
secondFunc(1)

var newFuncObj = new newFunc()

console.log(newFuncObj)

newFuncObj.run()

// 当绑定函数成为i

// 绑定函数使用new之后
console.log('after', obj)
