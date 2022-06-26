import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentsRoutingModule } from './residents-routing.module';
import { ResidentsListComponent } from './residents-list/residents-list.component';
import { ResidentDetailComponent } from './resident-detail/resident-detail.component';


@NgModule({
  declarations: [
    ResidentsListComponent,
    ResidentDetailComponent
  ],
  imports: [
    CommonModule,
    ResidentsRoutingModule
  ]
})
export class ResidentsModule { }
