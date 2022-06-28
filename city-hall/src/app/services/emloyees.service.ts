import { Injectable } from '@angular/core';
import { EMPLOYEES } from '../employees/dummy-data-employees';
import {Observable , of} from 'rxjs'; 
import { map } from 'rxjs/operators';

import Emloyee from '../employees/Empoyee';

@Injectable({
  providedIn: 'root'
})
export class EmloyeesService {

  private _emloyees: Emloyee[] = [];

  constructor() { }

  public getEmployees(): Observable<Emloyee[]> {
    return of(EMPLOYEES);
  }

  public getOneEmployee(id:number | string) {
    return this.getEmployees().pipe(
      map((_emloyees: Emloyee[]) => _emloyees.find((res)=> res.getId() === +id)!)
    );
  }

}

