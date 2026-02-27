import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-transferencias',
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './transferencias.html',
  styleUrl: './transferencias.scss',
})
export class Transferencias {

  http  = inject(ApiService)
  $dados = this.http.GetArtilheiros()

  

}
