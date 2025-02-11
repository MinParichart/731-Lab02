// Task 1 ข้อ8
console.log("Hello, TypeScript with Node.js!")

// Task 2 : การใช้งาน Data Type ของ TypeScript
// Task 2 ข้อ2
// let x : number | string = 10; 
// x = 'hello'; 

// Task 2 ข้อ3
// let x : number | string = 10;
// // x = 'hello';
// x = 5;
// if (typeof x === 'string') { 
//     console.log('x is a string'); 
// } else if (typeof x === 'number') { 
//     console.log('x is a number');
// } else { 
//     console.log('x is neitehr a string nor a number'); 
// }

// Task 3 : การเรียกใช้งาน Function ใน TypeScript
// Task 3 ข้อ2
// const add = (a : number ,b : number) => { 
//     return a+b; 
// }
// const result = add(1,2) + 0; 
// console.log(result, 'type of result : ', typeof result); 

// Task 3 ข้อ3 ข้อ4 : บังคับให้ Function ต้อง return ค่าแบบ string
// const add = (a : number ,b : number) : string => { 
//     const result = a+b; 
//     return result.toString(); 
// }
// const result = add(1,2) + 0; 
// console.log(result, 'type of result : ', typeof result);

// Task 4 การ import export function 
// Task 4 ข้อ2 ข้อ3 ข้อ4
// import { add } from './functions';
// const result = add(1,2) + 0; 
// console.log(result, 'type of result : ', typeof result);

// Task 4 ข้อ5
// import { add, subtract } from './functions';
// const result = add(1,2) + 0; 
// const result2 = subtract(1,2) + 0;
// console.log(result, 'type of result : ', typeof result )
// console.log(result2, 'type of result2 : ', typeof result2 )

// Task 4 ข้อ6
// import add, { subtract } from './functions';
// const result = add(1,2) + 0; 
// console.log(result, 'type of result : ', typeof result);
// const result2 = subtract(1,2) + 0;
// console.log(result2, 'type of result2 : ', typeof result2 )

// Task 4 ข้อ7
// import { findMax } from './function2';
// const numbers = [1, 2, 3, 4, 5];
// console.log(`The maximum number is: ${findMax(numbers)}`);
// console.log(typeof findMax(numbers));

