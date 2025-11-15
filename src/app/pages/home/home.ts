import { Component, OnInit } from '@angular/core';
import {  Productss } from '../../product.model';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../../shared/product-card/product-card';
import { Header } from '../../core/header/header';
import { Product } from '../../services/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCard, Header],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  featuredProducts: Productss[] = [];

  constructor(private productService: Product) { }

  ngOnInit(): void {
    this.featuredProducts = this.productService.getFeaturedProducts();
  }
}
