import { Component } from '@angular/core';
import { Barnav } from '../barnav/barnav';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [Barnav, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
