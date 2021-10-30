var demoArr = []

// 不可以一次项传入太多的参数，因为apply会限制参数个数导致参数溢出参数丢失的情况
demoArr.push.apply(demoArr, [1, 2, 3, 4])
// push 参数为泛型T类型的可变数组
demoArr.push(5, 6, 7, 8)
console.log( demoArr )