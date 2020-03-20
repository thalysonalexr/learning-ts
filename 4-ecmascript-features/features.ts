// let and const

// this is permission by hoisting var
// console.log(thename)
// var thename = 'Thalyson'

// const and let have block scope

// function scope
function printName(): void {
  let thename = 'Thalyson'
  // block scope
  if (thename.length > 5) {
    let othername1 = 'Rodrigues'
    console.log(othername1)
  } else {
    let othername2 = 'Sousa'
    console.log(othername2)
  }
  console.log(thename)
  // console.log(othername1) not exists in function scope
}

// console.log(thename) not exists in global scope

const PI = 3.1415
console.log(PI)

// PI = 5 not assign, variable is a constant

// arrow functions
const sum2 = (x: number, y: number) => x + y
console.log(sum2(2, 5)) // 7

const sub = (x: number, y: number): number => x - y
console.log(sub(60,5)) // 55

const sayHi = () => console.log('Hello')
sayHi()

const sayHelloByName = (name: string) => console.log(`Hi ${name}!`)
sayHelloByName('Thalyson')

// this
/*function normalWithThis() {
  console.log(this)
}

const normalWithThisSpecial = normalWithThis.bind(2)

normalWithThisSpecial()

const arrowWithThis = () => console.log(this)
*/

// default param
function count(begin: number = 3, last: number = begin - 5) {
  console.log(begin)
  while(begin >= last) {
    begin--
    console.log(begin)
  }
  console.log('End')
}

count()
count(2)

// spread and rest
const numbers = [19, 2, 3, 12, 49]

console.log(Math.max(...numbers))

const classA: string[] = ['Joao', 'Maria', 'Fernanda']
const classB: string[] = ['Thalyson', 'Rayeli', 'Maria', ...classA]

console.log(classA)

function returnArray(a: number, ...rest: number[]): number[] {
  console.log(a)
  return rest
}

const mynumbers = returnArray(1,2,3,4,6,7,8)
console.log(mynumbers)

// rest and spread in tuples

const tuple: [number, string, boolean] = [1, 'label', false]

function tupleParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`)
}

tupleParam1(...tuple)

function tupleParam2(...p: [number, string, boolean]): void {
  console.log(Array.isArray(p))
  console.log(`2) ${p[0]} ${p[1]} ${p[2]}`)
}

tupleParam2(...tuple)

// destructuring (array)
const features = ['Motor Zetec 1.8', 2020]
// const motor = features[0]
// const year = features[1]

const [motor, year] = features

console.log(motor, year)

// destructuring (objects)
const item = {
  name: 'SSD 480GB',
  price: 200,
  features: {
    w: 'Import'
  }
}

const { name: n, price: p, features: { w } } = item;

console.log(n, p, w)

// template string
const hello = 'Hello'
const world = 'World'

const helloWorld = `[${hello} ${world}]`

console.log(helloWorld)

// challenges

// 1
const double = (value: number): number => value * 2
console.log(double(10))

// 2
const sayHello2 = (name: string = 'Pessoa'): void => console.log(`Hello ${name}`)

sayHello2()
sayHello2('Anna')

// 3
const nums = [-3, 33, 38, 5]
console.log(Math.min(...nums))

// 4
const array = [55, 20, ...nums]
console.log(array)

// 5
const notes = [8.5, 6.3, 9.4]
const [note1, note2, note3] = notes

console.log(note1, note2, note3)
 
// 6
var scientist = {fisrtName: "Will", experience: 12}
const { fisrtName, experience } = scientist

console.log(fisrtName, experience)

// callback
function await3s(callback: (data: string ) => void) {
  setTimeout(() => {
    callback('3s after...')
  }, 3000)
}

await3s(function(result: string) {
  console.log(result)
})

function await3sPromisse() {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve('3s after...')
    }, 3000)
  })
}

await3sPromisse()
  .then(data => console.log(data))
