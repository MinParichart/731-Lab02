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
// import express, { Request, Response } from 'express'
// const app = express()
// const port = 3000

// app.get('/',(req : Request, res : Response) => {
//     res.send('Hello World')
// })

// app.listen(port, () => {
//     console.log(`App listening at http : //localhost:${port}`)
// })

// app.get('/test', (req : Request, res : Response) => {
//     const id = req.query.id;
//     const output = `id : ${id}`;
//     res.send(output);
// })

// Task 9 ข้อ1 สร้าง type ของ Object ที่จะใช้ใน server.ts โดยการเพิ่ม code นี้
// import express, { Request, Response } from 'express'
// const app = express()
// const port = 3000

// app.get('/',(req : Request, res : Response) => {
//     res.send('Hello World')
// })

// app.listen(port, () => {
//     console.log(`App listening at http : //localhost:${port}`)
// })

// app.get('/test', (req : Request, res : Response) => {
//     const id = req.query.id;
//     const output = `id : ${id}`;
//     res.send(output);
// })

// app.get('/events', (req : Request, res : Response) => {
//     res.json(events);
// })

// Task 10 การสร้าง endpoint เพื่อ query ข้อมูล
// Task 10 ข้อ1
// import express, { Request, Response } from "express";
// const app = express();
// const port = 3000;

// app.get("/", (req: Request, res: Response) => {
//   res.send(events);
// });

// app.listen(port, () => {
//   console.log(`App listening at http : //localhost:${port}`);
// });

// // กรณีไม่มีการ check ค่า (key:"value") ว่ามีการส่งมาหรือไม่
// // app.get("/events", (req, res) => {
// //     const category = req.query.category;
// //     const filteredEvents = events.filter((event) => event.category === category);
// //     res.json(filteredEvents);
// // });

// // กรณีมีการ check ค่า (key:"value") ว่ามีการส่งมาหรือไม่
// app.get("/events", (req, res) => {
//   if (req.query.category) {
//     const category = req.query.category; 
//     const filteredEvents = events.filter((event) => event.category === category); 
//     res.json(filteredEvents); 
//   } else { 
//     res.json (events); 
//   }
// });

// Task 10 การสร้าง endpoint เพื่อแสดงผลตาม Object ตาม id
// Task 10 ข้อ1
import express, { Request, Response } from "express";
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send(events);
});

app.listen(port, () => {
  console.log(`App listening at http : //localhost:${port}`);
});

// กรณีมีการ check ค่า (key:"value") ว่ามีการส่งมาหรือไม่
app.get("/events", (req, res) => {
  if (req.query.category) {
    const category = req.query.category; 
    const filteredEvents = events.filter((event) => event.category === category); 
    res.json(filteredEvents); 
  } else { 
    res.json (events); 
  }
});

// สร้าง endpoint ใหม่ เพื่อรับข้อมูล id บน path variable เพื่อใช้ในการดึงข้อมูลของ resource ตาม id
app.get("/events/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const event = events.find((event) => event.id === id)
  if (event) {
    res.json(event);
} else { 
    res.status(404).send("Event not found");  
  }
});
interface Event {
  id: number;
  category: string;
  title: string;
  decription: string;
  location: string;
  date: string;
  time: string;
  petsAllowed: boolean;
  organizer: string;
}

// Task 9 ข้อ2 สร้าง ตัวแปร events เพื่อเก็บข้อมูล list ของ event
const events : Event[] = [
  {
    id: 1,
    category: "Music",
    title: "Concert",
    decription: "A live concert",
    location: "London",
    date: "2021-07-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "Live Nation",
  },
  {
    id: 2,
    category: "Music",
    title: "Festival",
    decription: "A music festival",
    location: "Manchester",
    date: "2021-07-15",
    time: "12:00",
    petsAllowed: true,
    organizer: "Festival Republic",
  },
  {
    id: 3,
    category: "Music",
    title: "Gig",
    decription: "A gig",
    location: "Birmingham",
    date: "2021-07-30",
    time: "20:00",
    petsAllowed: true,
    organizer: "Academy Music Group",
  },
  {
    id: 4,
    category: "Sports",
    title: "Football Match",
    decription: "A live football match",
    location: "London",
    date: "2021-07-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "Premier League",
  },
  {
    id: 5,
    category: "Music",
    title: "Festival",
    decription: "A music festival",
    location: "Manchester",
    date: "2021-07-15",
    time: "12:00",
    petsAllowed: true,
    organizer: "Festival Republic",
  },
  {
    id: 6,
    category: "Music",
    title: "Gig",
    decription: "A gig",
    location: "Birmingham",
    date: "2021-07-30",
    time: "20:00",
    petsAllowed: true,
    organizer: "Academy Music Group",
  },
];
