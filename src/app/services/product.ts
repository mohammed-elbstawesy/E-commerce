import { Injectable } from '@angular/core';
import { Productss } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class Product {

  private featuredProducts: Productss[] = [
    { id: 1, name: "Royal Reign", price: 525, type: 'featured', imageUrl: 'assets/static/images/featured-collection/01.avif' },
    { id: 2, name: "White Bliss", price: 642, type: 'featured', imageUrl: 'assets/static/images/featured-collection/02.avif' },
    { id: 3, name: "Natural Gold", price: 259, type: 'featured', imageUrl: 'assets/static/images/featured-collection/03.avif' },
    { id: 4, name: "Aqua Leads", price: 422, type: 'featured', imageUrl: 'assets/static/images/featured-collection/04.avif' },
    { id: 5, name: "Virgin Whites", price: 623, type: 'featured', imageUrl: 'assets/static/images/featured-collection/05.avif' },
    { id: 6, name: "Maroon Peace", price: 295, type: 'featured', imageUrl: 'assets/static/images/featured-collection/06.avif' },
    { id: 7, name: "Benjamin Bee", price: 458, type: 'featured', imageUrl: 'assets/static/images/featured-collection/07.avif' },
    { id: 8, name: "Black Marvel", price: 456, type: 'featured', imageUrl: 'assets/static/images/featured-collection/08.avif' },
    { id: 9, name: "Gold Grain", price: 509, type: 'featured', imageUrl: 'assets/static/images/featured-collection/09.avif' }
  ];

  
  private allProducts: Productss[] = [
    { id: 10, type: 'sofa', name: 'Coral Risk', price: 205.00, imageUrl: 'assets/static/images/products/sofas1.avif' },
    { id: 11, type: 'sofa', name: 'Ocean Bliss', price: 290.00, imageUrl: 'assets/static/images/products/sofas2.avif' },
    { id: 12, type: 'sofa', name: 'Blue Rays', price: 340.00, imageUrl: 'assets/static/images/products/sofas3.avif' },
    { id: 13, type: 'sofa', name: 'Love Charm', price: 275.00, imageUrl: 'assets/static/images/products/sofas4.avif' },
    { id: 14, type: 'sofa', name: 'Green Armour', price: 310.00, imageUrl: 'assets/static/images/products/sofas5.avif' },
    { id: 15, type: 'sofa', name: "Benjamin's Best", price: 225.00, imageUrl: 'assets/static/images/products/sofas6.avif' },
    { id: 16, type: 'sofa', name: 'Sea Party', price: 380.00, imageUrl: 'assets/static/images/products/sofas7.avif' },
    { id: 17, type: 'sofa', name: 'Mamba Jamba', price: 260.00, imageUrl: 'assets/static/images/products/sofas8.avif' },
    { id: 18, type: 'bed', name: 'Penny Flex', price: 420.00, imageUrl: 'assets/static/images/products/beds1.avif' },
    { id: 19, type: 'bed', name: 'Oxford Ovals', price: 450.00, imageUrl: 'assets/static/images/products/beds2.avif' },
    { id: 20, type: 'bed', name: 'Sharp Jade', price: 490.00, imageUrl: 'assets/static/images/products/beds3.avif' },
    { id: 21, type: 'bed', name: 'Tokyo Town', price: 505.00, imageUrl: 'assets/static/images/products/beds4.avif' },
    { id: 22, type: 'bed', name: 'Vast Venny', price: 530.00, imageUrl: 'assets/static/images/products/beds5.avif' },
    { id: 23, type: 'bed', name: 'Pink Drip', price: 485.00, imageUrl: 'assets/static/images/products/beds6.avif' },
    { id: 24, type: 'bed', name: 'Mysterious Den', price: 435.00, imageUrl: 'assets/static/images/products/beds7.avif' },
    { id: 25, type: 'bed', name: 'Forest Fence', price: 445.00, imageUrl: 'assets/static/images/products/beds8.avif' },
    { id: 26, type: 'chair', name: 'Yuki Chooper', price: 215.00, imageUrl: 'assets/static/images/products/chairs1.avif' },
    { id: 27, type: 'chair', name: 'Incredible Yolk', price: 240.00, imageUrl: 'assets/static/images/products/chairs2.avif' },
    { id: 28, type: 'chair', name: 'Blue Whales', price: 275.00, imageUrl: 'assets/static/images/products/chairs3.avif' },
    { id: 29, type: 'chair', name: 'Lemon Lint', price: 230.00, imageUrl: 'assets/static/images/products/chairs4.avif' },
    { id: 30, type: 'chair', name: 'Workshop Bob', price: 225.00, imageUrl: 'assets/static/images/products/chairs5.avif' },
    { id: 31, type: 'chair', name: 'Raining Fire', price: 255.00, imageUrl: 'assets/static/images/products/chairs6.avif' },
    { id: 32, type: 'chair', name: 'Wooden Wander', price: 265.00, imageUrl: 'assets/static/images/products/chairs7.avif' },
    { id: 33, type: 'chair', name: "Bug's Beauty", price: 275.00, imageUrl: 'assets/static/images/products/chairs8.avif' },
  ];

  constructor() { }

  getFeaturedProducts(): Productss[] {
    return this.featuredProducts;
  }

  getAllProducts(): Productss[] {
    return this.allProducts;
  }

  getProductsByType(type: string): Productss[] {
    if (type === 'all products') {
      return this.allProducts;
    }
    return this.allProducts.filter(p => p.type === type);
  }

  getProductById(id: number): Productss | undefined {
    return [...this.featuredProducts, ...this.allProducts].find(p => p.id === id);
  }
}
