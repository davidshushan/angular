import { Injectable } from '@angular/core';
import Resident from '../residents/Resident';
import { RESIDENTS } from '../residents/dummy-data-residents'; 
import {Observable, of} from "rxjs";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class ResidentService {
  private _residents: Resident[] = [];

  constructor() { }
  
  public getResidents(): Observable<Resident[]> {
    return of(RESIDENTS);
  }

  public getOneResident(id:number | string) {
    return this.getResidents().pipe(
      map((residents: Resident[]) => residents.find((res)=> res.getId() === +id)!)
    );
  }

}
