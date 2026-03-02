import { Component, signal, effect, inject } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { BuscaService } from '../../app/services/busca.service';

@Component({
  selector: 'app-barra-digitacao',
  imports: [FormField],
  templateUrl: './barra-digitacao.html',
  styleUrl: './barra-digitacao.scss',
})
export class BarraDigitacao {


  private buscar = inject(BuscaService)

  burcarTermo = signal({ termo: '' });
  buscarForm = form(this.burcarTermo);

  constructor() {
    effect(() => {
      const valorDigitado = this.buscarForm.termo().value();
      this.buscar.atualizarTermo(valorDigitado || '');
    });
  }
}
