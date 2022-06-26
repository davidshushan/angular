import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidentsListComponent } from './residents-list/residents-list.component';
import { ResidentDetailComponent } from './resident-detail/resident-detail.component';
const routes: Routes = [
  {path:'residents-list', component: ResidentsListComponent}, 
  {path:'resident/:id', component: ResidentDetailComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentsRoutingModule { }
