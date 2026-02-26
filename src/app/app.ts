import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { BetterPlayers } from '../components/better-players/better-players';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, BetterPlayers],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('futebol');
}
