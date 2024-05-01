import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { Appointment, AppointmentList } from 'src/model/Appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  appointments!: Appointment[];

  constructor(private appointmentService: AppointmentsService) {}

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe((appointmentList: AppointmentList) => {
      this.appointments = appointmentList.appointments;
      this.appointments.forEach((x, index) => {
        x.srNo = index + 1;
      })
    });
  }
}
