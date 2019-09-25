import { TestBed } from '@angular/core/testing';

import { MicroserviceManagerService } from './microservice-manager.service';

describe('MicroserviceManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MicroserviceManagerService = TestBed.get(MicroserviceManagerService);
    expect(service).toBeTruthy();
  });
});
