import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentsRoutingModule } from './residents-routing.module';
import { ResidentsListComponent } from './residents-list/residents-list.component';
import { ResidentDetailComponent } from './resident-detail/resident-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ResidentsListComponent,
    ResidentDetailComponent
  ],
  imports: [
    CommonModule,
    ResidentsRoutingModule,
    FormsModule
  ]
})
export class ResidentsModule { }
