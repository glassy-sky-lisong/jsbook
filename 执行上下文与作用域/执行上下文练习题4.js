// var foo = 1;

function bar () {
    // console.log(foo);
    // 当没有开启严格模式时，
    foo = 2;

    console.log(foo)
}

bar();
console.log(foo);