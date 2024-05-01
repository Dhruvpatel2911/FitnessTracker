import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { PlaceAppointmentComponent } from './pages/place-appointment/place-appointment.component';
import { LoginComponent } from './login/components/login.component';
import { RegistrationComponent } from './registration/components/registration.component';
import { DietplanComponent } from './dietplan/component/dietplan/dietplan.component';
import { WorkoutComponent } from './workout/component/workout/workout.component';
import { MeasurementComponent } from './measurement/component/measurement.component';
import { OfferComponent } from './offer/components/offer.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'bookappointments',
    component: AppointmentComponent,
  },
  {
    path: 'appointments',
    component: AppointmentComponent,
  },
  {
    path: 'dietplan',
    component: DietplanComponent
  },
  {
    path: 'workout',
    component: WorkoutComponent
  },
  {
    path: 'measurement',
    component: MeasurementComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },


  {
    path: 'contactus',
    component: ContactusComponent,
  },
  {
    path: 'offer',
    component: OfferComponent,
  },
  {
    path: 'logout',
    component: ContactusComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'manageAppointment',
    component: PlaceAppointmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
