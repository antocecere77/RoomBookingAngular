import { TestBed } from '@angular/core/testing';

import { EditBookingDataService } from './edit-booking-data.service';

describe('EditBookingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditBookingDataService = TestBed.get(EditBookingDataService);
    expect(service).toBeTruthy();
  });
});
