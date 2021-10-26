var foo = 1;
function bar (foo) {
    console.log(foo);
    foo = 234;
}
bar(123);
console.log(foo);