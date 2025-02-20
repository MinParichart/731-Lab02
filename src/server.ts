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

// // Task 10 ข้อ1  สร้าง endpoint ใหม่ เพื่อรับข้อมูล id บน path variable เพื่อใช้ในการดึงข้อมูลของ resource ตาม id
// app.get("/events/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const event = events.find((event) => event.id === id)
//   if (event) {
//     res.json(event);
// } else {
//     res.status(404).send("Event not found");
//   }
// });

// Task 11 การสร้าง Endpoint เพื่อเพิ่มข้อมูล
// Task 11 ข้อ1
// import express, { Request, Response } from "express";
// const app = express();
// app.use(express.json());
// const port = 3000;

// app.post("/events", (req,res)=> {
//     const newEvent : Event = req.body;
//     newEvent.id = events.length + 1;
//     events.push(newEvent);
//     res.json(newEvent);
// });

// app.get("/", (req: Request, res: Response) => {
//   res.send(events);
// });

// app.listen(port, () => {
//   console.log(`App listening at http : //localhost:${port}`);
// });

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

// interface Event {
//   id: number;
//   category: string;
//   title: string;
//   decription: string;
//   location: string;
//   date: string;
//   time: string;
//   petsAllowed: boolean;
//   organizer: string;
// }

// // Task 9 ข้อ2 สร้าง ตัวแปร events เพื่อเก็บข้อมูล list ของ event
// const events : Event[] = [
//   {
//     id: 1,
//     category: "Music",
//     title: "Concert",
//     decription: "A live concert",
//     location: "London",
//     date: "2021-07-01",
//     time: "19:00",
//     petsAllowed: false,
//     organizer: "Live Nation",
//   },
//   {
//     id: 2,
//     category: "Music",
//     title: "Festival",
//     decription: "A music festival",
//     location: "Manchester",
//     date: "2021-07-15",
//     time: "12:00",
//     petsAllowed: true,
//     organizer: "Festival Republic",
//   },
//   {
//     id: 3,
//     category: "Music",
//     title: "Gig",
//     decription: "A gig",
//     location: "Birmingham",
//     date: "2021-07-30",
//     time: "20:00",
//     petsAllowed: true,
//     organizer: "Academy Music Group",
//   },
//   {
//     id: 4,
//     category: "Sports",
//     title: "Football Match",
//     decription: "A live football match",
//     location: "London",
//     date: "2021-07-01",
//     time: "19:00",
//     petsAllowed: false,
//     organizer: "Premier League",
//   },
//   {
//     id: 5,
//     category: "Music",
//     title: "Festival",
//     decription: "A music festival",
//     location: "Manchester",
//     date: "2021-07-15",
//     time: "12:00",
//     petsAllowed: true,
//     organizer: "Festival Republic",
//   },
//   {
//     id: 6,
//     category: "Music",
//     title: "Gig",
//     decription: "A gig",
//     location: "Birmingham",
//     date: "2021-07-30",
//     time: "20:00",
//     petsAllowed: true,
//     organizer: "Academy Music Group",
//   },
// ];

// Task 1 Lab3 ------------------------------------------------------
// import express, { Request, Response } from "express";
// const app = express();
// app.use(express.json());
// const port = 3000;

// function getEventByCategory(category:string) : Event[] {
//   const filteredEvents = events.filter((event) => event.category === category);
//   return filteredEvents;
//  }

// function getAllEvents() : Event[]{
//   return events;
// }

// function getEventById(id : number) : Event | undefined {
//   return events.find((event) => event.id === id);
// }

// function addEvent(newEvent : Event) : Event {
//   newEvent.id = events.length+1;
//   events.push(newEvent);
//   return newEvent;
// }

// app.get("/", (req: Request, res: Response) => {
//   res.send(events);
// });

// app.get("/events", (req,res) => {
//   if (req.query.category){
//     const category = req.query.category as string;
//     const filteredEvents = getEventByCategory(category as string);
//     res.json(filteredEvents);
//   } else {
//     res.json(getAllEvents);
//   }
// })

// app.get("/events/:id", (req,res)=>{
//   const id = parseInt(req.params.id);
//   const event = getEventById(id);
//   if (event){
//     res.json(event);
//   } else {
//     res.status(404).send("Event not found");
//   }
// })

// app.post("/events", (req,res)=>{
//   const newEvent : Event = req.body;
//   addEvent(newEvent);
//   res.json(newEvent);
// });

// app.listen(port, () => {
// console.log(`App listening at http : //localhost:${port}`);
// });

// interface Event {
//   id: number;
//   category: string;
//   title: string;
//   decription: string;
//   location: string;
//   date: string;
//   time: string;
//   petsAllowed: boolean;
//   organizer: string;
// }

// const events : Event[] = [
//   {
//     id: 1,
//     category: "Music",
//     title: "Concert",
//     decription: "A live concert",
//     location: "London",
//     date: "2021-07-01",
//     time: "19:00",
//     petsAllowed: false,
//     organizer: "Live Nation",
//   },
//   {
//     id: 2,
//     category: "Music",
//     title: "Festival",
//     decription: "A music festival",
//     location: "Manchester",
//     date: "2021-07-15",
//     time: "12:00",
//     petsAllowed: true,
//     organizer: "Festival Republic",
//   },
//   {
//     id: 3,
//     category: "Music",
//     title: "Gig",
//     decription: "A gig",
//     location: "Birmingham",
//     date: "2021-07-30",
//     time: "20:00",
//     petsAllowed: true,
//     organizer: "Academy Music Group",
//   },
//   {
//     id: 4,
//     category: "Sports",
//     title: "Football Match",
//     decription: "A live football match",
//     location: "London",
//     date: "2021-07-01",
//     time: "19:00",
//     petsAllowed: false,
//     organizer: "Premier League",
//   },
//   {
//     id: 5,
//     category: "Music",
//     title: "Festival",
//     decription: "A music festival",
//     location: "Manchester",
//     date: "2021-07-15",
//     time: "12:00",
//     petsAllowed: true,
//     organizer: "Festival Republic",
//   },
//   {
//     id: 6,
//     category: "Music",
//     title: "Gig",
//     decription: "A gig",
//     location: "Birmingham",
//     date: "2021-07-30",
//     time: "20:00",
//     petsAllowed: true,
//     organizer: "Academy Music Group",
//   },
// ];

// Task 2 Lab3 ------------------------------------------------------
// import express, { Request, Response } from "express";
// import type { Event } from './service/eventService';
// import { addEvent, events, getAllEvents, getEventByCategory, getEventById } from './service/eventService';
// const app = express();
// app.use(express.json());
// const port = 3000;

// app.get("/", (req: Request, res: Response) => {
//   res.send(events);
// });

// app.get("/events", (req,res) => {
//   if (req.query.category){
//     const category = req.query.category as string;
//     const filteredEvents = getEventByCategory(category as string);
//     res.json(filteredEvents);
//   } else {
//     res.json(getAllEvents);
//   }
// })

// app.get("/events/:id", (req,res)=>{
//   const id = parseInt(req.params.id);
//   const event = getEventById(id);
//   if (event){
//     res.json(event);
//   } else {
//     res.status(404).send("Event not found");
//   }
// })

// app.post("/events", (req,res)=>{
//   const newEvent : Event = req.body;
//   addEvent(newEvent);
//   res.json(newEvent);
// });

// app.listen(port, () => {
// console.log(`App listening at http : //localhost:${port}`);
// });

// Task 3 Lab3 ------------------------------------------------------
// import express, { Request, Response } from "express";
// import add from "./functions";
// import type { Event } from './service/eventService';
// import { addEvent, events, getAllEvents, getEventByCategory, getEventById } from './service/eventService';
// const app = express();
// app.use(express.json());
// const port = 3000;

// app.get("/", (req: Request, res: Response) => {
//   res.send(events);
//   res.send(add(1,2)); // ใส่เฉยๆ ให้ add ไม่หาย
// });

// app.get("/events", async (req,res) => {
//   if (req.query.category){
//     const category = req.query.category;
//     const filteredEvents = await getEventByCategory(category as string);
//     res.json(filteredEvents);
//   } else {
//     res.json(await getAllEvents());
//   }
// })

// app.get("/events/:id", async (req,res)=>{
//   const id = parseInt(req.params.id);
//   const event = await getEventById(id);
//   if (event){
//     res.json(event);
//   } else {
//     res.status(404).send("Event not found");
//   }
// })

// app.post("/events", async (req,res)=>{
//   const newEvent : Event = req.body;
//   await addEvent(newEvent);
//   res.json(newEvent);
// });

// app.listen(port, () => {
// console.log(`App listening at http : //localhost:${port}`);
// });

// Task 4 Lab3 ------------------------------------------------------
// import express, { Request, Response } from "express";
// import add from "./functions";
// import type { Event } from './models/events';
// import { events } from './repository/eventRepository';
// import { addEvent, getAllEvents, getEventByCategory, getEventById } from './service/eventService';
// const app = express();
// app.use(express.json());
// const port = 3000;

// app.get("/", (req: Request, res: Response) => {
//   res.send(events);
//   res.send(add(1,2)); // ใส่เฉยๆ ให้ add ไม่หาย
// });

// app.get("/events", async (req,res) => {
//   if (req.query.category){
//     const category = req.query.category;
//     const filteredEvents = await getEventByCategory(category as string);
//     res.json(filteredEvents);
//   } else {
//     res.json(await getAllEvents());
//   }
// })

// app.get("/events/:id", async (req,res)=>{
//   const id = parseInt(req.params.id);
//   const event = await getEventById(id);
//   if (event){
//     res.json(event);
//   } else {
//     res.status(404).send("Event not found");
//   }
// })

// app.post("/events", async (req,res)=>{
//   const newEvent : Event = req.body;
//   await addEvent(newEvent);
//   res.json(newEvent);
// });

// app.listen(port, () => {
// console.log(`App listening at http : //localhost:${port}`);
// });

// Task 9 Lab3 ------------------------------------------------------
import express, { Request, Response } from "express";
import multer from "multer";
import add from "./functions";
import type { Event } from "./models/events";
import { events } from "./repository/eventRepository";
import {
  addEvent,
  getAllEvents,
  getEventByCategory,
  getEventById,
} from "./service/eventService";
import { uploadFile } from "./service/uploadFileService";
const app = express();
app.use(express.json());
const port = 3000;

const upload = multer({ storage: multer.memoryStorage() });

app.post("/upload", upload.single("file"), async (req: any, res: any) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).send("No file uploaded.");
    }
    const bucket = "image";
    const filePath = `uploads/${file.originalname}`;
    const ouputUrl = await uploadFile(bucket, filePath, file);
    res.status(200).send(ouputUrl);
  } catch (error) {
    res.status(500).send("Error uploading file.");
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send(events);
  res.send(add(1, 2)); // ใส่เฉยๆ ให้ add ไม่หาย
});

app.get("/events", async (req, res) => {
  if (req.query.category) {
    const category = req.query.category;
    const filteredEvents = await getEventByCategory(category as string);
    res.json(filteredEvents);
  } else {
    res.json(await getAllEvents());
  }
});

app.get("/events/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const event = await getEventById(id);
  if (event) {
    res.json(event);
  } else {
    res.status(404).send("Event not found");
  }
});

app.post("/events", async (req, res) => {
  const newEvent: Event = req.body;
  await addEvent(newEvent);
  res.json(newEvent);
});

app.listen(port, () => {
  console.log(`App listening at http : //localhost:${port}`);
});
