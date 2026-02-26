import { Component } from '@angular/core';

@Component({
  selector: 'app-better-players',
  imports: [],
  templateUrl: './better-players.html',
  styleUrl: './better-players.scss',
})
export class BetterPlayers {
  protected readonly ageNeymar: string = "32"
  protected readonly ageMessi: string = "39"
  protected readonly ageCr7: string = "42"



  mostrarMelhor (): any{
    alert(" O melhor é o cristiano ")
  }

}
