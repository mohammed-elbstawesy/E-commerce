import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterLinkWithHref], 
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
