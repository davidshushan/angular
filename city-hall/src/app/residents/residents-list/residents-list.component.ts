import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import Resident from '../resident/Resident';
import { ResidentService } from 'src/app/services/resident.service';
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-residents-list',
  templateUrl: './residents-list.component.html',
  styleUrls: ['./residents-list.component.scss']
})

export class ResidentsListComponent implements OnInit {

  residents!: Observable<Resident[]>;
  selectedId = 0;

  constructor(private service: ResidentService,  private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.residents = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = parseInt(params.get("id")!);
        return this.service.getResidents();
      })
    );    
  };

}

