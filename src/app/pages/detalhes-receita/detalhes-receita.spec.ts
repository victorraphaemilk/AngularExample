import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesReceita } from './detalhes-receita';

describe('DetalhesReceita', () => {
  let component: DetalhesReceita;
  let fixture: ComponentFixture<DetalhesReceita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesReceita],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalhesReceita);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
