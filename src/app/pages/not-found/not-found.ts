import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../core/header/header';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [Header, RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound {

}

