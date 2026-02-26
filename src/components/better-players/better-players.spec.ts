import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterPlayers } from './better-players';

describe('BetterPlayers', () => {
  let component: BetterPlayers;
  let fixture: ComponentFixture<BetterPlayers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetterPlayers],
    }).compileComponents();

    fixture = TestBed.createComponent(BetterPlayers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
