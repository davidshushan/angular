import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmloyeesListComponent } from './emloyees-list.component';

describe('EmloyeesListComponent', () => {
  let component: EmloyeesListComponent;
  let fixture: ComponentFixture<EmloyeesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmloyeesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmloyeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
