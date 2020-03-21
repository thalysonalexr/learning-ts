// challenge 1
class Moto {
  constructor(public name: string, public speed: number = 0) {}

  public honk(): void {
    console.log('Toooooooooooot!')
  }

  public speedUp(delta: number): void {
    this.speed = this.speed + delta
  }
}

const moto: Moto = new Moto('Ducati')
moto.honk()
console.log(moto.speed)
moto.speedUp(30)
console.log(moto.speed)

// challenge 2
abstract class Object2D {
  constructor(protected base: number = 0, protected height: number = 0) {}

  abstract area(): number
}

class Rect extends Object2D {
  public area(): number {
    return this.base * this.height
  }
}

const rect: Rect = new Rect(5, 7)
console.log(rect.area())

// challenge 3
class Trainee {
  private _firstName: string = ''
  
  get firstName(): string {
    return this._firstName
  }

  set firstName(value: string) {
    this._firstName = value.length >= 3 ? value : ''
  }
}

const trainee: Trainee = new Trainee()

console.log(trainee.firstName)
trainee.firstName = 'Le'
console.log(trainee.firstName)
trainee.firstName = 'Leonardo'
console.log(trainee.firstName)
