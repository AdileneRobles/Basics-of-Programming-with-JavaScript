//var a = 3.5;
//console.log(a.toFixed(2));

/* var a = 10;
function foo() {
    a = a * 2;
    a = a + 3;
}
foo();
console.log(a);
foo();
foo();
console.log(a); */

/*function foo(b) {
    a = a * 2;
    a = a + b;
}

a = 10;

foo(5);
foo(25);
foo(100);
console.log(a);*/

function foo(b) {
    a = a * 2;
    a = a + b;
    return a / 2;
}

var a = 10;
var b = foo(3);
console.log(a);
console.log(b);
//function bar() { .. }
//foo(bar())