import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessesListRoutingModule } from './businesses-list-routing.module';
import { BusinessesListComponent } from './businesses-list/businesses-list.component';

@NgModule({
  declarations: [
    BusinessesListComponent
  ],
  imports: [
    CommonModule,
    BusinessesListRoutingModule
  ]
})
export class BusinessesListModule { }
