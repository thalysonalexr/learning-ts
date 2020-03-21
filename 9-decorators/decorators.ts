function logClass(constructor: Function) {
  console.log(constructor)
}

function decoratorEmpty(_: Function) {}

function logClassIf(value: boolean) {
  return value ? logClass : decoratorEmpty
}

// factory
function decorator(obj: { a: string, b: number }) {
  return function(_: Function): void {
    console.log(_)
    console.log(`${obj.a} ${obj.b}`)
  }
}

// decorators in classes
// @loggClass
// @decorator({ a: 'Thalyson', b: 2 })
// @logClassIf(false)

// inherit with decorators
@logObject
class Eletric {
  constructor() {
    console.log('new...')
  }
}

//type Constructor = { new(...args: any[]): {} }

function logObject(constructor: Constructor) {
  console.log('Loading...')
  // anonymous class
  return class extends constructor {
    constructor(...args: any[]) {
      console.log('Before...')
      super(...args)
      console.log('After...')
    }
  }
}

interface UserPrintable {
  print?(): void
}

new Eletric()


// method with decorator of class
@logObject
@printable
class User implements UserPrintable {
  constructor() {}
}

function printable(constructor: Function) {
  constructor.prototype.print = function() {
    console.log(this)
  }
}

const u: UserPrintable = new User()

u?.print && u.print()

// chalenge 1
class LoggedUser {
  constructor(private _name: string, private _email: string, private _admin: boolean) {}

  public get name(): string {
    return this._name
  }

  public set name(name: string) {
    this._name = name
  }

  public get email(): string {
    return this._email
  }

  public set email(email: string) {
    this._email = email
  }

  public get admin(): boolean {
    return this._admin
  }

  public set admin(admin: boolean) {
    this._admin = admin
  }
}

const lu: LoggedUser = new LoggedUser('Thalyson', 'tha.motog@gmail.com', true)

@perfilAdmin
class ChangeAdministrative {
  public critic() {
    console.log('Something critic was altered!')
  }
}

new ChangeAdministrative().critic()

type Constructor = { new(...args: any[]): {} }

function perfilAdmin<T extends Constructor>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args)
      if (!lu || !lu?.admin) {
        throw new Error('Not Authorized 403')
      }
    }
  }
}

// decorator in method
class CurrentAccount {
  @notNegative
  private balance: number

  constructor(balance: number) {
    this.balance = balance
  }

  @freeze
  public withdraw(@paramInfo value: number) {
    if (value <= this.balance) {
      this.balance -= value
    } else {
      return false
    }
  }

  @freeze
  public getBalance(): number {
    return this.balance
  }
}

const ca: CurrentAccount = new CurrentAccount(102394.12)
ca.withdraw(2000)

function freeze(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log(target)
  console.log(name)
  descriptor.writable = false
}

console.log(ca.getBalance())

// decorator in property
function notNegative(target: any, name: string) {
  delete target[name]
  Object.defineProperty(target, name, {
    get: function(): any {
      return target['_' + name]
    },
    set: function(value: any): void {
      if (value < 0) {
        throw new Error('Balance invalid')
      } else {
        target['_' + name] = value
      }
    }
  })
}

// decorators in parameters method
function paramInfo(target: any, name: string, index: number) {
  console.log(`Target: ${target}`)
  console.log(`Method: ${name}`)
  console.log(`Index: ${index}`)
}