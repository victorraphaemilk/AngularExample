import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDigitacao } from './barra-digitacao';

describe('BarraDigitacao', () => {
  let component: BarraDigitacao;
  let fixture: ComponentFixture<BarraDigitacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraDigitacao],
    }).compileComponents();

    fixture = TestBed.createComponent(BarraDigitacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
