import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmloyeesListComponent } from './emloyees-list/emloyees-list.component';
import { EmployeesListRoutingModule } from './employees-list-routing.module';


@NgModule({
  declarations: [
    EmloyeesListComponent,
  ],
  imports: [
    CommonModule,
    EmployeesListRoutingModule
  ]
})
export class EmployeesListModule { }
