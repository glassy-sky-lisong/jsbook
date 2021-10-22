// js是否存在块级作用域

var a = 'aaa'
let c = 'ccc'
{

    var b = 'bbb'
    let d = 'ddd'
}

console.log(a, b, c, d) // d is not undefined