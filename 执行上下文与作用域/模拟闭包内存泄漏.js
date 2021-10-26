const heapdump = require('heapdump');

// function adder(a, b) {

//   return function () {
//     console.log(a+b)
//   }
// }

// function out() {
//     const bigData = new Buffer(100);
//     inner = function () {
//         void bigData;
//     }
// }

// let add1 = adder(1,2)

// add1();

const save = function () {
  gc();
  heapdump.writeSnapshot('./' + Date.now() + '.heapsnapshot');
}

save()