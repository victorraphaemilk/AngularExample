import { Component } from '@angular/core';
import { BetterPlayers } from '../../../components/better-players/better-players';

@Component({
  selector: 'app-melhores-jogadores',
  imports: [BetterPlayers],
  templateUrl: './melhores-jogadores.html',
  styleUrl: './melhores-jogadores.scss',
})
export class MelhoresJogadores {}
