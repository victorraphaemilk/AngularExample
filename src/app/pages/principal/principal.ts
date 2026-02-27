import { Component, inject } from '@angular/core';
import { GreetingService } from '../../services/greeting.service';

@Component({
  selector: 'app-principal',
  imports: [],
  templateUrl: './principal.html',
  styleUrl: './principal.scss',
})
export class Principal {
  GreetingService = inject(GreetingService);

  trocarGreeting(): void {
    this.GreetingService.trocarGreeting();
  }
}
