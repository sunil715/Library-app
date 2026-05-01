import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTiles } from './top-tiles';

describe('TopTiles', () => {
  let component: TopTiles;
  let fixture: ComponentFixture<TopTiles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopTiles],
    }).compileComponents();

    fixture = TestBed.createComponent(TopTiles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
