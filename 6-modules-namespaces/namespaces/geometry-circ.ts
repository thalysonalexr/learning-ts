namespace Geometry {
  export namespace Area {
    const PI = 3.1415

    export function circle(radius: number): number {
      return PI * Math.pow(radius, 2)
    }
  }
}