import { Component, inject, effect, signal } from '@angular/core';
import { ApiService, Meal } from '../../services/api.service';
import { BuscaService } from '../../services/busca.service';
import { RouterLink } from '@angular/router';
import { BarraDigitacao } from '../../../components/barra-digitacao/barra-digitacao';

@Component({
  selector: 'app-lista-receitas',
  imports: [RouterLink, BarraDigitacao], 
  templateUrl: './lista-receitas.html',
  styleUrl: './lista-receitas.scss',
})
export class ListaReceitas {
  private apiService = inject(ApiService);
  private buscaService = inject(BuscaService);
  
  listaDeReceitas = signal<Meal[]>([]);

  constructor() {
    effect(() => {
      const termoAtual = this.buscaService.termoDeBusca();
      
      this.apiService.getReceitasPorBusca(termoAtual).subscribe(resposta => {
        if (resposta?.meals) {
          this.listaDeReceitas.set(resposta.meals.slice(0, 20));
        } else {
          this.listaDeReceitas.set([]); 
        }
      });
    });
  }
}