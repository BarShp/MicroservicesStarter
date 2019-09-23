import { TestBed } from '@angular/core/testing';

import { MicroserviceReaderService } from './microservice-reader.service';

describe('MicroserviceReaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MicroserviceReaderService = TestBed.get(MicroserviceReaderService);
    expect(service).toBeTruthy();
  });
});
