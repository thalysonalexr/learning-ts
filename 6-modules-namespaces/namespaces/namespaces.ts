// // namespaces
// namespace Geometry {
//   // namespace nested
//   export namespace Area {
//     const PI: number = 3.1415
  
//     export function circle(radius: number): number {
//       return PI * Math.pow(radius, 2)
//     }
  
//     export function rect(base: number, height: number): number {
//       return base * height
//     }
//   }
// }

// namespaces imports
///<reference path="geometry-circ.ts"
///<reference path="geometry-rect.ts"

console.log(Geometry.Area.circle(10))
console.log(Geometry.Area.rect(10, 20))