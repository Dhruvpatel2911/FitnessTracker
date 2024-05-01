import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment, AppointmentList } from 'src/model/Appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  
  constructor(private httpService: HttpClient) {}

  getAppointments() {
    return this.httpService.get<AppointmentList>("/assets/json/preserve/preserve.json");
  }

  addAppointment(appointment: Appointment) {
    return this.httpService.post('http://localhost:3000/appointments', JSON.stringify(appointment), { "headers": { "content-type": "application/json"}});
  }
}
