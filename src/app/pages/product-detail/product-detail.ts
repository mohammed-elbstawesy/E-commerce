import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Productss } from '../../product.model';
import { Header } from '../../core/header/header';
import { Product } from '../../services/product';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, Header],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit {

  product: Productss | undefined;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: Product
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const productId = +idParam;
      this.product = this.productService.getProductById(productId);

      if (!this.product) {
        this.router.navigate(['/not-found']);
      }
    } else {
      this.router.navigate(['/products']);
    }
  }

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
