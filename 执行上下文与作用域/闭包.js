function foo() {
    var a = 11

    return function () {
        console.log(a)
    }
}

var a = 1

foo()()