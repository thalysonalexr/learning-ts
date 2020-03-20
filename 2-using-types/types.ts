// inference type
let myname = 'thalyson' // string
let age = 23 // number
let height = 1.75 // number
let isadmin = true // boolean
console.log(myname)
console.log(age)
console.log(height)
console.log(isadmin)

// explicit type
let anywhere: any = 'Hello!'
let booleantype: boolean = false
let numbertype: number = 12.2
let stringtype: string = 'Yes!'

let hobbies: any[] = ['Cozinhar', 'Praticar Esportes'] // array type any

console.log(hobbies[0]) // Cozinhar
console.log(typeof hobbies[0]) // string

hobbies = [100, 200, 300]
console.log(hobbies) // [100, 200, 300]

// tuples
let endereco: [string, number] = ['Av. Principal', 99]

endereco.push('Street Important', 1280)
console.log(endereco) // ['Av. Principal', 99, 'Street Important', 1280]

// enums
enum Color {
  Grey,        // 0
  Green = 100, // 100
  Blue = 10,   // 10
  Orange,      // 11
  Yellow,      // 12
  Red = 10     // 10
}

let myColor: Color = Color.Green
console.log(myColor)

console.log(Color)

// any
let carro: any = 'BMW'
console.log(carro)

carro = { name: 'BMW', year: 2020 }
console.log(carro)

// functions with types

function returnMyName(): string {
  return myname
}

console.log(returnMyName())

function sayHello(): void {
  console.log('Hello')
}

sayHello()

function multiply(numA: number, numB: number): number {
  return numA * numB
}

console.log(multiply(2, 5))

// functions like types
let calc: (x: number, y: number) => number
calc = multiply

console.log(calc(12,24))

// objects
let user: { name: string, age: number } = {
  name: 'Joao',
  age: 12
}

console.log(user)

// chalenge 1
let employee: {
  supervisors: string[],
  hitPoint: (hour: number) => string
} = {
  supervisors: ['Thalyson', 'John', 'Maria'],
  hitPoint: (hour: number) => hour <= 8 ? 'Normal point' : 'Out of hours'
}

console.log(employee.supervisors)
console.log(employee.hitPoint(8))
console.log(employee.hitPoint(9))

// alias
type Employee = {
  supervisors: string[],
  hitPoint: (hour: number) => string
}

let employee2: Employee = {
  supervisors: ['Maria', 'Fernanda', 'Gabriela'],
  hitPoint: (hour: number) => hour <= 8 ? 'Normal point' : 'Out of hours'
}

// union types
let note: number | string = 10
console.log(note)
note = '10'
console.log(note)

// check type in runtime
let value = 30

if (typeof value === 'number') {
  console.log('Is number')
} else {
  console.log(typeof value)
}

// type never
function fail(message: string): never {
  throw new Error(message)
}

const product = {
  name: 'Sabão',
  price: -1,
  validateProduct() {
    if (!this.name || this.name.trim().length === 0) {
      fail('Need have a name')
    }

    if (this.price <= 0) {
      fail('Price invalid')
    }
  }
}

// product.validateProduct()

// challenge 2
type AccountBank = {
  balance: number,
  deposite: (value: number) => void
}

type AccountHolder = {
  name: string,
  accountBank: AccountBank,
  contacts: string[]
}

const accountBank: AccountBank = {
  balance: 3456,
  deposite(value: number) {
    this.balance += value
  }
}

const accountHolder: AccountHolder = {
  name: 'Ana Silva',
  accountBank,
  contacts: ['34567890', '98765432']
}

accountHolder.accountBank.deposite(3000)
console.log(accountHolder)
