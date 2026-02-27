import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresJogadores } from './melhores-jogadores';

describe('MelhoresJogadores', () => {
  let component: MelhoresJogadores;
  let fixture: ComponentFixture<MelhoresJogadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MelhoresJogadores],
    }).compileComponents();

    fixture = TestBed.createComponent(MelhoresJogadores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
