export type Camp = {
  id: string;
  location: string;
  date: string;
};

export type Registration = {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  phone: string;
  email: string;
  address: string;
  campLocation: string;
  medicalCondition: string;
};

export type Patient = {
  bookNumber: string;
  name: string;
  phone: string;
  age: number;
  gender: 'Male' | 'Female';
  area: string;
};

export type Doctor = {
  id: string;
  name: string;
  specialty: string;
};
