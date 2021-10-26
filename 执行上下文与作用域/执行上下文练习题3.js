// console.log(`foo = ${foo}`)

var foo = 1;
function bar () {
    // 函数作用域顶端
    // 上想问创建时，var变量会先赋值为undefined,在声明位置后才可以拿到赋值后的变量
    console.log(foo);
    var foo = 10;
    console.log(foo);
}

bar();

// function tt() {
//     console.log(bb)

//     var bb = 11;
// }

// tt()