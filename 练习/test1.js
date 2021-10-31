// 测试目的： 判断forin是否支持查找原型链属性

var obj = {
    a: 1,
    b: false,
    c: () => console.log('123')
}

Object.defineProperty(obj, 'd', {
    // enumerable: true
    enumerable: false
})

for(let i in obj) {
    console.log(i)
}

// 测试结论： for in 确实会遍历到原型上可枚举的属性