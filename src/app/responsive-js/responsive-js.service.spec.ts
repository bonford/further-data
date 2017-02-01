/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResponsiveJsService } from './responsive-js.service';

describe('ResponsiveJsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResponsiveJsService]
    });
  });

  it('should ...', inject([ResponsiveJsService], (service: ResponsiveJsService) => {
    expect(service).toBeTruthy();
  }));
});
