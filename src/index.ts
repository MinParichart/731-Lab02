console.log("Hello, TypeScript with Node.js!")

let x : number | string = 10; 
// x = 'hello'; 
x = 5; 
if (typeof x === 'string') { 
    console.log('x is a string'); 
} else if (typeof x === 'number') { 
    console.log('x is a number');
} else { 
    console.log('x is neitehr a string nor a number'); 
}

