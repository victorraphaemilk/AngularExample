import { Component, inject } from '@angular/core';
import { Barnav } from '../barnav/barnav';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../app/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [Barnav, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
   auth = inject(AuthService)
}
