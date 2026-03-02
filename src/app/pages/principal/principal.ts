import { Component, inject } from '@angular/core';
import { GreetingService } from '../../services/greeting.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-principal',
  imports: [RouterLink],
  templateUrl: './principal.html',
  styleUrl: './principal.scss',
})
export class Principal {
  GreetingService = inject(GreetingService);

  trocarGreeting(): void {
    this.GreetingService.trocarGreeting();
  }
}
