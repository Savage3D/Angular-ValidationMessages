import { TestBed } from '@angular/core/testing';

import { ValidationMessageService } from './validation-message.service';

describe('FormErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidationMessageService = TestBed.get(ValidationMessageService);
    expect(service).toBeTruthy();
  });
});
