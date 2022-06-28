import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import Emloyee from '../Empoyee';
import { EmloyeesService } from 'src/app/services/emloyees.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-emloyees-list',
  templateUrl: './emloyees-list.component.html',
  styleUrls: ['./emloyees-list.component.scss']
})
export class EmloyeesListComponent implements OnInit {

  emloyees!: Observable<Emloyee[]>;
  selectedId = 0;
  constructor(private service: EmloyeesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.emloyees = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = parseInt(params.get("id")!);
        return this.service.getEmployees();
      })
    ) 
  };

}
