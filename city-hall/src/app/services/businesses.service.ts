import { Injectable } from '@angular/core';
import {Observable , of} from 'rxjs'; 
import { map } from 'rxjs/operators';
import Business from '../businesses/business';
import { BUSINESSES } from '../businesses/dummy-data-businesses';
@Injectable({
  providedIn: 'root'
})
export class BusinessesService {
  private _Business: Business[] = [];
  constructor() { }
  public getBusinesses(): Observable<Business[]> {
    return of(BUSINESSES);
  }

  public getOneBusiness(id:number | string) {
    return this.getBusinesses().pipe(
      map((_Business: Business[]) => _Business.find((res)=> res.getId() === +id)!)
    );
  }

}

