
console.log("Hello, TypeScript with Node.js!")
// Task 2 : การใช้งาน Data Type ของ TypeScript
// let x : number | string = 10; 
// x = 'hello'; 
// x = 5; 
// if (typeof x === 'string') { 
//     console.log('x is a string'); 
// } else if (typeof x === 'number') { 
//     console.log('x is a number');
// } else { 
//     console.log('x is neitehr a string nor a number'); 
// }

// Task 3 : การเรียกใช้งาน Function ใน TypeScript
// const add = (a : number ,b : number) : string => { 
//     const result = a+b; 
//     return result.toString(); 
// }

// import { add, subtract } from './functions';
import add, { subtract } from './functions';
const result = add(1,2) + 0; 
const result2 = subtract(1,2) + 0;
console.log(result, 'type of result : ', typeof result )
console.log(result2, 'type of result2 : ', typeof result2 )

import { findMax } from './function2';
// Example usage
const numbers = [1, 2, 3, 4, 5];
console.log(`The maximum number is: ${findMax(numbers)}`);
console.log(typeof findMax(numbers));

