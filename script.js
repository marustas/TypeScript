"use strict";
//let a : {text : string} = {text :'hello'}
//let b : any;//new type any
//b = 1;//new type any
//b = 'HELLO'//new type any
//b = null//new type any
//b = undefined//new type any
//b= {}//new type any
//b =  function( )  { }//new type any
function a(x, y) {
    return x + y;
}
;
var b = function (x, y) { return x + y; };
var c;
c = function (x, y) {
    return x + y;
};
var d = function (x, y) {
    console.log(x + y);
};
var e = function (x) {
    throw new Error(x);
};
var f = function (x, y) {
    if (typeof x === 'number') {
        return x + y;
    }
    else {
        return '${x} ${y}';
    }
};
console.log(f(1, 2));
console.log(f("Answer", 3));
function g(x, y) {
    if (typeof x === 'number') {
        return x + y;
    }
    else {
        return '${x} ${y}';
    }
}
;
console.log(g(1, 2));
//# sourceMappingURL=script.js.map