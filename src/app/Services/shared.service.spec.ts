import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './shared.service';

describe('SharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [ HttpClientModule ], providers: [ SharedService ]}));

  it('should be created', () => {
    const service: SharedService = TestBed.get(SharedService);

    expect(service).toBeTruthy();
  });
});
