// classes
class MyDate {
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

const birthday: MyDate = new MyDate(3, 11)

birthday.day = 5

console.log(birthday.day)
console.log(birthday.month)
console.log(birthday.year)

// classes and methods
class MyDate2 {
  constructor(
    public day: number = 1,
    public month: number = 1,
    public year: number = 1970
  ) {}
}

const birthday2: MyDate2 = new MyDate(3, 11, 2019)

birthday2.day = 5

console.log(birthday2.day)
console.log(birthday2.month)
console.log(birthday2.year)

// challenge 1
// challenge 2
class Product {
  constructor(
    public name: string,
    public price: number,
    public discount: number = 0,
  ) {
    if (this.discount < 0 || this.discount > 1) {
      throw new Error('Discount must be 0 to 1')
    }
  }

  public priceWithDiscount(): number {
    return this.price - this.price * this.discount
  }

  public resume(): string {
    return `
            Product: ${this.name}
            Price: ${this.priceWithDiscount()}
            Discount: ${this.discount * 100}% off`
  }
}

const product1: Product = new Product('Arroz', 8.90)
const product2: Product = new Product('Notebook ASUS', 2470.60, 0.05)

console.log(product1)
console.log(product2)

console.log(product2.priceWithDiscount())
console.log(product2.resume())

// access modifiers
class Car {
  private currentSpeed: number = 0

  constructor(public brand: string, public model: string, private maxSpeed: number = 200) {
  }

  protected changeSpeed(delta: number): number {
    const newSpeed = this.currentSpeed + delta
    const validSpeed = newSpeed >= 0 && newSpeed <= this.maxSpeed

    this.currentSpeed = validSpeed ? newSpeed : (delta > 0 ? this.maxSpeed : 0)
    
    return this.currentSpeed
  }

  public speedUp(): number {
    return this.changeSpeed(5)
  }

  public speedDown(): number {
    return this.changeSpeed(-5)
  }
}

const car1: Car = new Car('Ford', 'Ka', 185)

Array(50).fill(0).forEach(() => car1.speedUp())
console.log(car1.speedUp())

// inherit
class Ferrari extends Car {
  constructor(model: string, maxSpeed: number) {
    super('Ferrari', model, maxSpeed)
  }

  public speedUp(): number {
    return this.changeSpeed(20)
  }

  public speedDown(): number {
    return this.changeSpeed(-15)
  }
}

const f40: Ferrari = new Ferrari('F40', 324)
console.log(`${f40.brand} ${f40.model}`)

f40.speedUp()
f40.speedUp()

f40.speedDown()
f40.speedDown()

console.log(f40.speedUp())

// getters and setters
class Person {
  private _age: number = 0

  get age(): number {
    return this._age
  }

  set age(value: number) {
    if (value >= 0 && value <= 120) {
      this._age = value
    }
  }
}

const person1: Person = new Person()
person1.age = 10

console.log(person1.age)

// static members
class MyMath {
  public static PI: number = 3.1416

  public static areaCirc(radius: number): number {
    return MyMath.PI * radius * radius
  }
}

const area: number = MyMath.areaCirc(10)
console.log(area)

// abstract class
abstract class Calc {
  private _result: number = 0

  public abstract run(...numbers: number[]): void

  public get result(): number {
    return this._result
  }

  public set result(value: number) {
    this._result = value
  }
}

class Sum extends Calc {
  public run(...numbers: number[]): void {
    this.result = numbers.reduce((x, y) => x + y)
  }
}

class Multiply extends Calc {
  public run(...numbers: number[]): void {
    this.result = numbers.reduce((x, y) => x * y)
  }
}

const c1: Calc = new Sum() // polimorfism
c1.run(1,2,3,4,5)
console.log(c1.result)

const c2: Calc = new Multiply // polimorfism
c2.run(1,2,3,4,5)
console.log(c2.result)

// singleton | private constructor
class Unique {
  private static instance: Unique = new Unique()
  private constructor() {}

  public static getInstance(): Unique {
    return Unique.instance
  }

  public now() {
    return new Date
  }
}

console.log(Unique.getInstance().now())

// readonly
class Airplane {
  public readonly model: string

  constructor(model: string, public readonly prefix: string) {
    this.model = model
  }
}

const ap: Airplane = new Airplane('Tu-114', 'PT-ABC')

console.log(ap)
