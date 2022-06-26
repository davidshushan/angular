import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidentComponent } from './residents/resident/resident.component';
import { ResidentsModule } from './residents/residents.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ResidentComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResidentsModule,  
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:      [ ]
})
export class AppModule { }
