import { TestBed, inject } from '@angular/core/testing';

import { NgxCombinationGeneratorService } from './ngx-combination-generator.service';

describe('LibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxCombinationGeneratorService]
    });
  });

  it('should create service', inject([NgxCombinationGeneratorService], (service: NgxCombinationGeneratorService) => {
    expect(service).toBeTruthy();
  }));

  it('should say hello to stranger', inject([NgxCombinationGeneratorService], (service: NgxCombinationGeneratorService) => {
    expect(service.sayHello()).toBe('Hello Stanger!');
  }));

 it('should say hello to provided user', inject([NgxCombinationGeneratorService], (service: NgxCombinationGeneratorService) => {
    expect(service.sayHello('ng-hacker')).toBe('Hello ng-hacker!');
  }));
});
