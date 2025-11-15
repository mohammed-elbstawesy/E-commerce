import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Productss } from '../../product.model';
import { Header } from '../../core/header/header';
import { PageBanner } from '../../shared/page-banner/page-banner';
import { ProductCard } from '../../shared/product-card/product-card';
import { Product } from '../../services/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    Header,
    PageBanner,
    ProductCard
  ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {

  productTypes: string[] = ['All Products', 'Sofas', 'Beds', 'Chairs'];
  activeFilter: string = 'All Products';
  
  allProducts: Productss[] = [];
  filteredProducts: Productss[] = [];
  paginatedProducts: Productss[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 8;
  totalPages: number = 1;

  constructor(private productService: Product) {}

  ngOnInit(): void {
    this.allProducts = this.productService.getAllProducts();
    this.filterProducts('All Products');
  }

  filterProducts(type: string): void {
    this.activeFilter = type;
    let filterKey = type.toLowerCase();
    
    if (filterKey === 'all products') {
      this.filteredProducts = this.allProducts;
    } else {
      if (filterKey === 'sofas') {
        filterKey = 'sofa';
      } else if (filterKey === 'beds') {
        filterKey = 'bed';
      } else if (filterKey === 'chairs') {
        filterKey = 'chair';
      }
      this.filteredProducts = this.allProducts.filter(p => p.type === filterKey);
    }
    
    this.totalPages = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    this.goToPage(1);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    
    this.currentPage = page;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedProducts = this.filteredProducts.slice(startIndex, endIndex);
  }

  firstPage(): void {
    this.goToPage(1);
  }

  prevPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  lastPage(): void {
    this.goToPage(this.totalPages);
  }
}
