import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiOverview } from './api-overview';

describe('ApiOverview', () => {
  let component: ApiOverview;
  let fixture: ComponentFixture<ApiOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
