import type { Camp, Patient, Registration } from '@/lib/types';

export const camps: Camp[] = [
  {
    id: 'camp-1',
    location: 'Greenwood Park',
    date: 'October 15, 2024',
  },
  {
    id: 'camp-2',
    location: 'Maple Community Center',
    date: 'November 5, 2024',
  },
  {
    id: 'camp-3',
    location: 'Oceanview Library',
    date: 'December 1, 2024',
  },
];

export const registrations: Registration[] = [
  {
    id: 'reg-1',
    name: 'Alice Johnson',
    age: 34,
    gender: 'Female',
    phone: '555-0101',
    email: 'alice.j@example.com',
    address: '123 Oak St, Greenwood',
    campLocation: 'Greenwood Park',
    medicalCondition: 'Asthma',
  },
  {
    id: 'reg-2',
    name: 'Bob Williams',
    age: 45,
    gender: 'Male',
    phone: '555-0102',
    email: 'bob.w@example.com',
    address: '456 Pine St, Mapleton',
    campLocation: 'Maple Community Center',
    medicalCondition: 'High blood pressure',
  },
  {
    id: 'reg-3',
    name: 'Charlie Brown',
    age: 28,
    gender: 'Male',
    phone: '555-0103',
    email: 'charlie.b@example.com',
    address: '789 Birch St, Oceanview',
    campLocation: 'Oceanview Library',
    medicalCondition: 'None',
  },
  {
    id: 'reg-4',
    name: 'Diana Prince',
    age: 29,
    gender: 'Female',
    phone: '555-0104',
    email: 'diana.p@example.com',
    address: '101 Maple Ave, Greenwood',
    campLocation: 'Greenwood Park',
    medicalCondition: 'Allergies',
  },
    {
    id: 'reg-5',
    name: 'Edward Nygma',
    age: 52,
    gender: 'Male',
    phone: '555-0105',
    email: 'ed.n@example.com',
    address: '212 Riddle Rd, Mapleton',
    campLocation: 'Maple Community Center',
    medicalCondition: 'Diabetes Type 2',
  },
];

export const patients: Patient[] = [
  {
    bookNumber: '12345',
    name: 'Nik',
    phone: '8390999999',
    age: 25,
    gender: 'Male',
    area: 'Hyderabad',
  }
];
