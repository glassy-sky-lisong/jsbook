// 全局作用域
var value = 1;

function foo() {
    // foo 函数作用域
  console.log(value);
}

function bar() {
    // bar 函数作用域
  var value = 2;


//   谁调用了bar函数
  console.log(this)
  foo()
}

bar();

