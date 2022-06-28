import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmloyeesListComponent } from './emloyees-list/emloyees-list.component';
const routes: Routes = [
  {path:'Emloyees-list', component: EmloyeesListComponent}, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesListRoutingModule { }
