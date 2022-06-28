import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidentsModule } from './residents/residents.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesListModule } from './employees/employees-list.module';
import { BusinessesListModule } from './businesses/businesses-list.module';

@NgModule({
  declarations: [
    AppComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResidentsModule,  
    FormsModule,
    ReactiveFormsModule,
    EmployeesListModule,
    BusinessesListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:      [ ]
})
export class AppModule { }
