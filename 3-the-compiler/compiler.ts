// use noEmitOnError: true in tsconfig.json
// use target ES6
// enable sourceMap
// enable strictNullChecks
// enable noUsedParameters
// enable noUsedLocals
// use outDir

function sum(a: any, b: any): any {
  return a + b
}

console.log(sum(2,3))

let anywhereThing
anywhereThing =  12
anywhereThing = 'hello'

function greet(isMorning: boolean = true): string {
  let greeting: string
  greeting = isMorning ? 'Good Morning' : 'Good Life'
  return greeting
}

console.log(greet())
console.log(greet(false))
