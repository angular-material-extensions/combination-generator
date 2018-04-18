import {TestBed, inject} from '@angular/core/testing';

import {NgxCombinationGeneratorService} from './ngx-combination-generator.service';

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

  it('should generate all combinations between two characters', inject([NgxCombinationGeneratorService],
    (service: NgxCombinationGeneratorService) => {
      const charsList = ['a', 'A'];
      const result = service.loadCombinationList(charsList, 2, 2);
      expect(result.length).toBe(4);
    }));

  it('should generate all unique combinations between two characters', inject([NgxCombinationGeneratorService],
    (service: NgxCombinationGeneratorService) => {
      const charsList = ['a', 'A'];
      const result = service.loadCombinationList(charsList, 2, 2, true);
      expect(result.length).toBe(2);
    }));

});
