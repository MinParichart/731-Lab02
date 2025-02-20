// Task 2 Lab 3 --------------------------------------------------------------
// export interface Event {
//     id: number;
//     category: string;
//     title: string;
//     decription: string;
//     location: string;
//     date: string;
//     time: string;
//     petsAllowed: boolean;
//     organizer: string;
//   }
  
// export const events : Event[] = [
//     {
//       id: 1,
//       category: "Music",
//       title: "Concert",
//       decription: "A live concert",
//       location: "London",
//       date: "2021-07-01",
//       time: "19:00",
//       petsAllowed: false,
//       organizer: "Live Nation",
//     },
//     {
//       id: 2,
//       category: "Music",
//       title: "Festival",
//       decription: "A music festival",
//       location: "Manchester",
//       date: "2021-07-15",
//       time: "12:00",
//       petsAllowed: true,
//       organizer: "Festival Republic",
//     },
//     {
//       id: 3,
//       category: "Music",
//       title: "Gig",
//       decription: "A gig",
//       location: "Birmingham",
//       date: "2021-07-30",
//       time: "20:00",
//       petsAllowed: true,
//       organizer: "Academy Music Group",
//     },
//     {
//       id: 4,
//       category: "Sports",
//       title: "Football Match",
//       decription: "A live football match",
//       location: "London",
//       date: "2021-07-01",
//       time: "19:00",
//       petsAllowed: false,
//       organizer: "Premier League",
//     },
//     {
//       id: 5,
//       category: "Music",
//       title: "Festival",
//       decription: "A music festival",
//       location: "Manchester",
//       date: "2021-07-15",
//       time: "12:00",
//       petsAllowed: true,
//       organizer: "Festival Republic",
//     },
//     {
//       id: 6,
//       category: "Music",
//       title: "Gig",
//       decription: "A gig",
//       location: "Birmingham",
//       date: "2021-07-30",
//       time: "20:00",
//       petsAllowed: true,
//       organizer: "Academy Music Group",
//     },
//   ];
  
// export function getEventByCategory(category:string) : Event[] {
//   const filteredEvents = events.filter((event) => event.category === category);
//   return filteredEvents;
//  }

//  export function getAllEvents() : Event[]{
//   return events;
// }

// export function getEventById(id : number) : Event | undefined {
//   return events.find((event) => event.id === id);
// }

// export function addEvent(newEvent : Event) : Event {
//   newEvent.id = events.length+1;
//   events.push(newEvent);
//   return newEvent;
// }

// Task 3 Lab 3 --------------------------------------------------------------
// export interface Event {
//     id: number;
//     category: string;
//     title: string;
//     decription: string;
//     location: string;
//     date: string;
//     time: string;
//     petsAllowed: boolean;
//     organizer: string;
//   }
  
// export const events : Event[] = [
//     {
//       id: 1,
//       category: "Music",
//       title: "Concert",
//       decription: "A live concert",
//       location: "London",
//       date: "2021-07-01",
//       time: "19:00",
//       petsAllowed: false,
//       organizer: "Live Nation",
//     },
//     {
//       id: 2,
//       category: "Music",
//       title: "Festival",
//       decription: "A music festival",
//       location: "Manchester",
//       date: "2021-07-15",
//       time: "12:00",
//       petsAllowed: true,
//       organizer: "Festival Republic",
//     },
//     {
//       id: 3,
//       category: "Music",
//       title: "Gig",
//       decription: "A gig",
//       location: "Birmingham",
//       date: "2021-07-30",
//       time: "20:00",
//       petsAllowed: true,
//       organizer: "Academy Music Group",
//     },
//     {
//       id: 4,
//       category: "Sports",
//       title: "Football Match",
//       decription: "A live football match",
//       location: "London",
//       date: "2021-07-01",
//       time: "19:00",
//       petsAllowed: false,
//       organizer: "Premier League",
//     },
//     {
//       id: 5,
//       category: "Music",
//       title: "Festival",
//       decription: "A music festival",
//       location: "Manchester",
//       date: "2021-07-15",
//       time: "12:00",
//       petsAllowed: true,
//       organizer: "Festival Republic",
//     },
//     {
//       id: 6,
//       category: "Music",
//       title: "Gig",
//       decription: "A gig",
//       location: "Birmingham",
//       date: "2021-07-30",
//       time: "20:00",
//       petsAllowed: true,
//       organizer: "Academy Music Group",
//     },
//   ];
  
// export function getEventByCategory(category:string) : Promise<Event[]> {
//   const filteredEvents = events.filter((event) => event.category === category);
//   return Promise.resolve(filteredEvents);
//  }

// export function getAllEvents() : Promise<Event[]>{
//    return Promise.resolve(events);
//  }

// export function getEventById(id : number) : Promise<Event| undefined> {
//    return Promise.resolve(events.find((event) => event.id === id));
//  }

//  export function addEvent(newEvent : Event) : Promise<Event> {
//    newEvent.id = events.length +1;
//    events.push(newEvent);
//    return Promise.resolve(newEvent);
//  }

// Task 4 Lab 3 --------------------------------------------------------------
// จะไม่เหลืออะไรเพราะว่า 
// type ย้ายไป models/events.ts
// event data + function ย้ายไป repository/eventRepository.ts
// เรียกใช้ functions ที่นำออกไปยัง EventRepository.ts ทั้งนี้หาก import method โดยตรง อาจเกิดปัญหา ชื่อของ function เหมือนกันในสองไฟล์ที่เรียกเข้ามาดังนั้นจึงใช้ alias (as ) เพื่อช่วยเปลี่ยนชื่อของฟังก์ชันที่ import มาใน EventService.ts

// กรณีถ้ามี function เยอะ ก็เสียเวลาทำ 
// import type { Event } from "../models/events";
// import {
//   addEvent as addNewEvent,
//   getAllEvents as allEvents,
//   getEventById as eventById
// } from "../repository/eventRepository";

// export function getEventByCategory(category: string): Promise<Event[]> {
//   return getEventByCategory(category);
// }

// export function getAllEvents(): Promise<Event[]> {
//   return allEvents();
// }

// export function getEventById(id: number): Promise<Event | undefined> {
//   return eventById(id);
// }

// export function addEvent(newEvent: Event): Promise<Event> {
//  return addNewEvent(newEvent);
// }

// กรณีมีหลาย function - ลัด ข้อดี ไม่ต้องเปลี่ยนชื่อ function แค่ใน repo. เข้าไป 
// import type { Event } from "../models/events";
// import * as repo from "../repository/eventRepository";

// export function getEventByCategory(category: string): Promise<Event[]> {
//   return repo.getEventByCategory(category);
// }

// export function getAllEvents(): Promise<Event[]> {
//   return repo.getAllEvents();
// }

// export function getEventById(id: number): Promise<Event | undefined> {
//   return repo.getEventById(id);
// }

// export function addEvent(newEvent: Event): Promise<Event> {
//  return repo.addEvent(newEvent);
// }

// Task 7 Lab 3 --------------------------------------------------------------
import type { Event } from "../models/events";
import * as repo from "../repository/eventRepositoryDb";

export function getEventByCategory(category: string): Promise<Event[]> {
  return repo.getEventByCategory(category);
}

export function getAllEvents(): Promise<Event[]> {
  return repo.getAllEvents();
}

export function getEventById(id: number): Promise<Event | undefined> {
  return repo.getEventById(id);
}

export function addEvent(newEvent: Event): Promise<Event> {
 return repo.addEvent(newEvent);
}
