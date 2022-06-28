import { TestBed } from '@angular/core/testing';

import { EmloyeesService } from './emloyees.service';

describe('EmloyeesService', () => {
  let service: EmloyeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmloyeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
