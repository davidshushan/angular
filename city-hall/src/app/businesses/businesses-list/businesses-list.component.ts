import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { BusinessesService } from 'src/app/services/businesses.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import Business from '../business';
@Component({
  selector: 'app-businesses-list',
  templateUrl: './businesses-list.component.html',
  styleUrls: ['./businesses-list.component.scss']
})
export class BusinessesListComponent implements OnInit {
  businesses!: Observable<Business[]>;
  selectedId = 0;
  constructor(private service: BusinessesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.businesses = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = parseInt(params.get("id")!);
        return this.service.getBusinesses();
      })
    ) 
  };

}
