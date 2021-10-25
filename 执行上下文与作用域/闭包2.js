var a = 1

function bar() {
  console.log(a)
}

function foo() {
    var a = 11

    return bar
}

foo()()