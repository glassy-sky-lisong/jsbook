foo();

var foo = function foo() {
// let foo = function foo() {
    console.log('foo1');
}

function foo() {
    console.log('foo2');
}

foo();

// 1.当变量和函数同名是，函数总是被先声明
// 2.在声明变量或函数之前使用的话，变量会提升到上下文（作用域）顶端