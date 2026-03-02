import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscaService {
  termoDeBusca = signal<string>('');

  atualizarTermo(novoTermo: string) {
    this.termoDeBusca.set(novoTermo);
  }
}