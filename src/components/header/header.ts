import { Component } from '@angular/core';
import { Barnav } from '../barnav/barnav';

@Component({
  selector: 'app-header',
  imports: [Barnav],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
