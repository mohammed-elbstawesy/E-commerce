import { Routes } from '@angular/router';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Products } from './pages/products/products';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { NotFound } from './pages/not-found/not-found';


export const routes: Routes = [
    { path: '', component: Home }, 
    { path: 'home', component: Home },
    { path: 'products', component: Products },
    { path: 'product/:id', component: ProductDetail },
    { path: 'about', component: About },
    { path: '**', component: NotFound } 
];