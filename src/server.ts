// Task 8 การใช้ express เพื่อสร้าง server เบื้องต้น 
// Task 8 ข้อ2
// import express, { Request, Response } from 'express'
// const app = express() 
// const port = 3000

// app.get('/',(req : Request, res : Response) => {
//     res.send('Hello World')
// })

// app.listen(port, () => { 
//     console.log(`App listening at http : //localhost:${port}`)
// })

// Task 8 ข้อ7
// import express, { Request, Response } from 'express'
// const app = express() 
// const port = 3000

// app.get('/',(req : Request, res : Response) => {
//     res.send('Hello World')
// })

// app.listen(port, () => { 
//     console.log(`App listening at http : //localhost:${port}`)
// })

// app.get('/test', (req, res) => { 
//     res.send('Hello World!')
// })

// Task 8 ข้อ8
// import express, { Request, Response } from 'express'
// const app = express() 
// const port = 3000

// app.get('/',(req : Request, res : Response) => {
//     res.send('Hello World')
// })

// app.listen(port, () => { 
//     console.log(`App listening at http : //localhost:${port}`)
// })

// app.get('/test', (req, res) => { 
//     let returnObj = { 
//         name : 'test', 
//         age : 20, 
//         address : 'Thai'
//     }
//     res.send(returnObj);
// })

// Task 8 ข้อ9
import express, { Request, Response } from 'express'
const app = express() 
const port = 3000

app.get('/',(req : Request, res : Response) => {
    res.send('Hello World')
})

app.listen(port, () => { 
    console.log(`App listening at http : //localhost:${port}`)
})

app.get('/test', (req : Request, res : Response) => { 
    const id = req.query.id;
    const output = `id : ${id}`; 
    res.send(output);
})