import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import Resident from '../resident/Resident';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ResidentService } from 'src/app/services/resident.service';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-resident-detail',
  templateUrl: './resident-detail.component.html',
  styleUrls: ['./resident-detail.component.scss']
})

export class ResidentDetailComponent implements OnInit {

  resident!: Observable<Resident>;
  _myResident!: Resident;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ResidentService
  ) {}

  ngOnInit(): void {
    this.resident = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getOneResident(params.get("id")!))
    );
    
  }

  changeName(newName: string) {
    if (newName) {
      // this.resident.setFullName(newName);
    }
  }

  goBack(){
    this.router.navigate(['/residents-list']);
  }

}
