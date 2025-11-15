import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-banner.html',
  styleUrl: './page-banner.css'
})
export class PageBanner {
  @Input({ required: true }) title: string = '';
  @Input() breadcrumb: string = '';
  @Input({ required: true }) backgroundImageUrl: string = '';
}
