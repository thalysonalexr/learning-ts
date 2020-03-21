// function with generics
function echo(object: any) {
  return object
}

console.log(echo('Joao').length)
console.log(echo(27).length)
console.log(echo({ name: 'Joao', age: 27 }).length)

// using generics
function echoImproved<T>(object: T): T {
  return object
}

console.log(echoImproved<string>('Joao').length)
console.log(echoImproved<number>(27))
console.log(echoImproved({ name: 'Joao', age: 27 }).name)
// console.log(echoImproved(27).length) error. no length property
// console.log(echoImproved({ name: 'Joao', age: 27 }).length) error. no length property

// generics with array
const avaliations: Array<number> = [9, 9.3, 7.7]
avaliations.push(8.4)
// avaliations.push('5.4') error, generic is typer number

console.log(avaliations)

function print<T>(...args: T[]) {
  args.forEach(element => console.log(element))
}

print(1,2,3,4)
print<number>(2,4,5)
print<string>('Thalyson', 'Alexandre', 'Rodrigues')

type Student = { name: string, age: number }

print<Student>(
  { name: 'Thalyson', age: 23 },
  { name: 'Maria', age: 44 },
  { name: 'Jadir', age: 55 }
)

// type function with generics
type TypeEcho = <T>(data: T) => T

const callEcho: TypeEcho = echoImproved

console.log(callEcho('Thalyson'))

// classes with generics
abstract class OperationBinary<T, K> {
  constructor(public op: T, public op2: T) {}

  public abstract run(): K
}

// its beautifuuuuuuuuuuuuuullllllllllll
class SumBinary extends OperationBinary<number, number> {
  public run(): number {
    return this.op + this.op2
  }
}

class ConcatBinary extends OperationBinary<string, string> {
  public run(): string {
    return `${this.op} ${this.op2}`
  }
}

class MyDate3 {
  // public types
  day: number
  month: number
  year: number
  
  constructor(day: number = 1, month: number = 1, year: number = 1970) {
    this.day = day
    this.month = month
    this.year = year
  }
}

class DiffDates extends OperationBinary<MyDate3, string> {
  public getTime(data: MyDate3): number {
    const { day, month, year } = data
    return new Date(`${month}/${day}/${year}`).getTime()
  }

  public run(): string {
    const t1 = this.getTime(this.op)
    const t2 = this.getTime(this.op2)
    const diff = Math.abs(t1 - t2)
    const day = 1000 * 60 * 60 * 24

    return `${Math.ceil(diff / day)} dia(s)`
  }
}

console.log(new SumBinary(2,4).run())
console.log(new ConcatBinary('Thalyson', 'Rodrigues').run())

const d1: MyDate3 = new MyDate3(1, 3, 2020)
const d2: MyDate3 = new MyDate3(20, 3, 2020)

const diff = new DiffDates(d1, d2)

console.log(diff.run())

// challenge 1
class Queue<T> {
  constructor(private queue: T[] = []) {}

  public push(element: T): void {
    this.queue.push(element)
  }

  public next(): T | null {
    if (this.queue?.length >= 0 && this.queue) {
      const [first] = this.queue
      this.queue.splice(0, 1)
      return first
    }
    return null
  }

  public print(): void {
    this.queue.forEach(element => console.log(element))
  }
}

const qstr = new Queue<string>()

qstr.push('Thalyson')
qstr.push('Alexandre')
qstr.push('Rodrigues')
qstr.push('de')
qstr.push('Sousa')
qstr.next() // remove 'Thalyson'

qstr.print()

const qnum = new Queue<number>()

qnum.push(1)
qnum.push(2)
qnum.push(3)
qnum.push(4)
qnum.push(5)
qnum.next() // 1
qnum.next() // 2
qnum.next() // 3

qnum.print()

type Client2 = { name: string, cpf: string, age: number }

const qclient = new Queue<Client2>()

qclient.push({ name: 'Thalyson', cpf: '066.123.888-12', age: 23 })
qclient.push({ name: 'Rayeli', cpf: '166.223.688-02', age: 18 })
qclient.push({ name: 'Jose', cpf: '000.222.777-10', age: 80 })
console.log(`removed ${qclient.next()?.name}`)

qclient.print()

// constraint <T extends number, Client, Etc>

// challenge 1
type KeyValue<K, V> = { key: K, value: V }

class Dict<K, V> {
  constructor(private items: Array<KeyValue<K, V>> = []) {}

  public put(element: KeyValue<K, V>) {
    const el: KeyValue<K, V> | null = this.get(element.key)
    if (el) {
      el.value = element.value
    } else {
      this.items.push(element)
    }
  }

  public get(key: K): KeyValue<K, V> | null {
    const el: KeyValue<K, V> | undefined = this.items.find(element => element.key === key)
    return el === undefined ? null : el
  }

  public print(): void {
    this.items.forEach(element => {
      console.log(`Key: ${element.key} Value: ${element.value}`)
    })
  }

  public clear(): void {
    this.items = []
  }
}

// Challenge Dict
// Array of Objects (Key/Value) -> items
// Methods: get(key), put({ K, V })
// clear(), print()
 
const dict = new Dict<number, string>()
dict.put({ key: 1, value: 'Pedro' })
dict.put({ key: 2, value: 'Rebeca' })
dict.put({ key: 3, value: 'Maria' })
dict.put({ key: 1, value: 'Gustavo' })
 
console.log(dict.get(2))
dict.print()
dict.clear()
dict.print()
