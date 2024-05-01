import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { Appointment } from 'src/model/Appointment';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css'],
})
export class AppointmentFormComponent implements OnInit {
  name!: string;
  age!: number;
  email!: string;
  mobile!: string;
  address!: string;
  city!: string;
  state!: string;
  country!: string;
  pincode!: string;
  trainerPreference!: string;
  physiotherapist!: string;
  package!: string;
  weeks!: string;
  amount!: number;

  constructor(
    private router: Router,
    private AppointmentService: AppointmentsService,
    private toaster: ToastrService
  ) {}

  onSubmit() {
    if (parseInt(this.package) == 1) {
      this.amount = 500;
    } else if (parseInt(this.package) == 4) {
      this.amount = 4 * 400 * parseInt(this.weeks);
    } else if (parseInt(this.package) == 5) {
      this.amount = 5 * 300 * parseInt(this.weeks);
    }
    const appointment: Appointment = {
      id: uuid(),
      srNo: 0,
      name: this.name,
      age: this.age,
      mobile: this.mobile,
      email: this.email,
      address: this.address,
      city: this.city,
      state: this.state,
      country: this.country,
      pincode: this.pincode,
      trainerPreference: this.trainerPreference,
      physiotherapist: this.physiotherapist,
      package: parseInt(this.package),
      weeks: parseInt(this.weeks),
      amount: this.amount,
    };
    this.AppointmentService.addAppointment(appointment).subscribe(() => {
      this.router.navigate(['/appointments']);
      this.toaster.success("Appointment placed");
    });
  }

  ngOnInit(): void {}
}
