import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReceitas } from './lista-receitas';

describe('ListaReceitas', () => {
  let component: ListaReceitas;
  let fixture: ComponentFixture<ListaReceitas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaReceitas],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaReceitas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
