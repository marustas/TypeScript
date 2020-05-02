"use strict";
var b = [1, ''];
b = [1];
//enum
var g;
(function (g) {
    g[g["a"] = 0] = "a";
    g[g["b"] = 1] = "b";
})(g || (g = {}));
console.log(g.a, g.b);
//# sourceMappingURL=script.js.map