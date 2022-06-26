import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidentComponent } from './residents/resident/resident.component';


const routes: Routes = [
  { path: 'residents', component: ResidentComponent } ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }







