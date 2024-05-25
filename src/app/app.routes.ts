import { Routes } from '@angular/router';
import { HomeComponent } from './components/body/home/home.component';

export const routes: Routes = [
    
    { path: '', component: HomeComponent },
    
    { path: 'product/:id', loadComponent: () => import('./components/body/product-detail/product-detail.component').then(c => c.ProductDetailComponent) },
    
    { path: 'shop/:category', loadComponent: () => import('./components/body/shop/shop.component').then(c => c.ShopComponent) },

    { path: 'cart', loadComponent: () => import('./components/body/cart/cart.component').then(c => c.CartComponent) },

    
    // { path: 'shop', loadComponent: () => import('./components/body/shop/shop.component').then(c => c.ShopComponent) },
    // { path: 'contact', loadComponent: () => import('./components/body/contact/contact.component').then(c => c.ContactComponent) },
    // { path: 'about', loadComponent: () => import('./components/body/about/about.component').then(c => c.AboutComponent) },
    
];
