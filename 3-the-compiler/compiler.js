"use strict";
// use noEmitOnError: true in tsconfig.json
// use target ES6
// enable sourceMap
// enable strictNullChecks
// enable noUsedParameters
// enable noUsedLocals
// use outDir
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
let anywhereThing;
anywhereThing = 12;
anywhereThing = 'hello';
function greet(isMorning = true) {
    let greeting;
    greeting = isMorning ? 'Good Morning' : 'Good Life';
    return greeting;
}
console.log(greet());
console.log(greet(false));
//# sourceMappingURL=compiler.js.map