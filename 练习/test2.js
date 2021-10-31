// 测试目的：forof 用法


// 可以遍历数组
for(let i of [1, 2, 3]) {
  console.log(i)
}

var obj = {
    a: 1,
    b: false,
    c: () => console.log(123),
    d: 'lisi'
}

// 使用Object.keys获取键值数组遍历
for(let i of Object.keys(obj)) {
  console.log(i, obj[i])
}

var demoSet = new Set()
demoSet.add(1).add(2).add(3).add(4)


// 遍历set
for(let i of demoSet) {
    console.log(i)
}

// 遍历字符串
for(let i of "hello") {
  console.log(i)
}

var demoMap = new Map()
demoMap.set('a', '1').set('b', '2').set('c', '3').set('d', '4')

// 遍历map
for ( let i of demoMap ) {
  console.log(i)
}