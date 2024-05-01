import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { QueryFormComponent } from './components/query-form/query-form.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { PlaceAppointmentComponent } from './pages/place-appointment/place-appointment.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/components/login.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/components/registration.component';
import { DietplanComponent } from './dietplan/component/dietplan/dietplan.component';
import { WorkoutComponent } from './workout/component/workout/workout.component';
import { MeasurementComponent } from './measurement/component/measurement.component';
import { OfferComponent } from './offer/components/offer.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AppointmentFormComponent,
    QueryFormComponent,
    AppointmentComponent,
    ContactusComponent,
    PlaceAppointmentComponent,
    HomeComponent,
    LoginComponent,
    DietplanComponent,
    WorkoutComponent,
    MeasurementComponent,
    OfferComponent,
    
   
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    RegistrationComponent,
    HttpClientModule,
    ToastrModule.forRoot({
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
