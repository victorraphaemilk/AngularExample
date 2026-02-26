import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barnav } from './barnav';

describe('Barnav', () => {
  let component: Barnav;
  let fixture: ComponentFixture<Barnav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Barnav],
    }).compileComponents();

    fixture = TestBed.createComponent(Barnav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
