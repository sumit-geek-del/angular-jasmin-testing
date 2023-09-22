import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should add two numbers', ()=> {
    // pending() // This is to mark that these two test cases are pending
    let result = service.add(2,2);
    expect(result).toBe(4);
  });

  it('should subtract two numbers', ()=> {
    // pending() // This is to mark that these this test case is pending
    let result = service.subtract(2, 2);
    expect(result).toBe(0)
  });
});
