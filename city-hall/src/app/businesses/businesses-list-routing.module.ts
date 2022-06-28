import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessesListComponent } from './businesses-list/businesses-list.component';
const routes: Routes = [
  {path:'businesses-list', component: BusinessesListComponent}, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessesListRoutingModule { }
