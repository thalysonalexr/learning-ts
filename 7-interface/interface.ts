interface Human {
  name: string,
  age?: number,
  [prop: string]: any,
  say(lastName: string): void
}

function sayWithHello(human: Human) {
  console.log(`Hello ${human.name}`)
}

function changeName(human: Human) {
  human.name = 'Joana'
}

const person: Human = {
  name: 'João',
  age: 45,
  say(lastName: string): void {
    console.log(`Hello, my name is ${this.name} ${lastName}`)
  }
}

sayWithHello(person)
changeName(person)
sayWithHello(person)

// with classes
class Client implements Human {
  public name: string = ''
  
  public say(lastName: string) {
    console.log(`Hello, my name is ${this.name} ${lastName}`)
  }
}

const c = new Client
c.name = 'Han'
sayWithHello(c)
c.say('Solo')

// interface with function
interface FunctionCalc {
  (a: number, b: number): number
}

const potential: FunctionCalc = function(b: number, e: number): number {
  return b ** e
}

console.log(potential(2, 8)) 

// inherit with interface
interface A {
  a(): void
}

interface B {
  b(): void
}

interface ABC extends A, B {
  c(): void
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

abstract class AbstractABD implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void
}