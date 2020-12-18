import { TestBed } from '@angular/core/testing';

import { ContactAppServiceService } from './contact-app-service.service';

describe('ContactAppServiceService', () => {
  let service: ContactAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
