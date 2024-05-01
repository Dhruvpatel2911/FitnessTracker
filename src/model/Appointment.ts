export interface Appointment {
  id: string;
  srNo: number;
  name: string;
  age: number;
  email: string;
  mobile: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  trainerPreference: string;
  physiotherapist: string;
  package: number;
  weeks: number;
  amount: number;
}

export class AppointmentList {
  appointments: Array<Appointment> = [];
}
