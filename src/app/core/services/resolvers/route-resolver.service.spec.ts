import { TestBed } from '@angular/core/testing';

import { RouteResolverService } from './route-resolver.service';

describe('RouteResolveService', () => {
  let service: RouteResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
