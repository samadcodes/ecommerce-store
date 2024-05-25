import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  popularProducts: ProductModel[] = []
  melodyKits: ProductModel[] = []
  drumKits: ProductModel[] = []

  constructor() { 
    // Initialize popularProducts array with dummy products
    this.popularProducts = [
      {
        id: 1,
        title: 'Product 1',
        oldPrice: 50.99,
        price: 40.00,
        rating: 4,
        imageName: 'prod_2.png'
      },
      {
        id: 2,
        title: 'Product 2',
        oldPrice: 60.00,
        price: 45.00,
        rating: 3,
        imageName: 'prod_3.png'
      },
      {
        id: 3,
        title: 'Product 3',
        oldPrice: 70.00,
        price: 55.00,
        rating: 5,
        imageName: 'model_5.png'
      },
      {
        id: 4,
        title: 'Product 4',
        oldPrice: 70.00,
        price: 55.00,
        rating: 5,
        imageName: 'prod_1.png'
      },
      {
        id: 5,
        title: 'Product 5',
        oldPrice: 50.00,
        price: 40.00,
        rating: 4,
        imageName: 'model_1.png'
      },
      {
        id: 6,
        title: 'Product 6',
        oldPrice: 60.00,
        price: 45.00,
        rating: 3,
        imageName: 'model_7.png'
      },
      {
        id: 7,
        title: 'Product 7',
        oldPrice: 70.00,
        price: 55.00,
        rating: 5,
        imageName: 'model_5.png'
      },
      {
        id: 8,
        title: 'Product 8',
        oldPrice: 70.00,
        price: 55.00,
        rating: 5,
        imageName: 'prod_1.png'
      },
      {
        id: 9,
        title: 'Product 9',
        oldPrice: 50.00,
        price: 40.00,
        rating: 4,
        imageName: 'model_1.png'
      },
      {
        id: 10,
        title: 'Product 10',
        oldPrice: 60.00,
        price: 45.00,
        rating: 3,
        imageName: 'model_7.png'
      }
    ];

    this.melodyKits = [
      {
        id: 1,
        title: 'Product 1',
        oldPrice: 50.99,
        price: 40.00,
        rating: 4,
        imageName: 'prod_2.png'
      },
      {
        id: 6,
        title: 'Product 6',
        oldPrice: 60.00,
        price: 45.00,
        rating: 3,
        imageName: 'model_7.png'
      },
      {
        id: 1,
        title: 'Product 1',
        oldPrice: 50.99,
        price: 40.00,
        rating: 4,
        imageName: 'prod_2.png'
      },
      {
        id: 6,
        title: 'Product 6',
        oldPrice: 60.00,
        price: 45.00,
        rating: 3,
        imageName: 'model_7.png'
      },
      {
        id: 1,
        title: 'Product 1',
        oldPrice: 50.99,
        price: 40.00,
        rating: 4,
        imageName: 'prod_2.png'
      },
      {
        id: 6,
        title: 'Product 6',
        oldPrice: 60.00,
        price: 45.00,
        rating: 3,
        imageName: 'model_7.png'
      },
      {
        id: 6,
        title: 'Product 6',
        oldPrice: 60.00,
        price: 45.00,
        rating: 3,
        imageName: 'model_7.png'
      },
      {
        id: 1,
        title: 'Product 1',
        oldPrice: 50.99,
        price: 40.00,
        rating: 4,
        imageName: 'prod_2.png'
      },
      {
        id: 6,
        title: 'Product 6',
        oldPrice: 60.00,
        price: 45.00,
        rating: 3,
        imageName: 'model_7.png'
      }
    ];

    this.drumKits = [
      {
        id: 2,
        title: 'Product 2',
        oldPrice: 60.00,
        price: 45.00,
        rating: 3,
        imageName: 'prod_3.png'
      },
      {
        id: 4,
        title: 'Product 4',
        oldPrice: 70.00,
        price: 55.00,
        rating: 5,
        imageName: 'prod_1.png'
      },
      {
        id: 5,
        title: 'Product 5',
        oldPrice: 50.00,
        price: 40.00,
        rating: 4,
        imageName: 'model_1.png'
      },
      {
        id: 2,
        title: 'Product 2',
        oldPrice: 60.00,
        price: 45.00,
        rating: 3,
        imageName: 'prod_3.png'
      },
      {
        id: 4,
        title: 'Product 4',
        oldPrice: 70.00,
        price: 55.00,
        rating: 5,
        imageName: 'prod_1.png'
      },
      {
        id: 5,
        title: 'Product 5',
        oldPrice: 50.00,
        price: 40.00,
        rating: 4,
        imageName: 'model_1.png'
      },
      {
        id: 2,
        title: 'Product 2',
        oldPrice: 60.00,
        price: 45.00,
        rating: 3,
        imageName: 'prod_3.png'
      },
      {
        id: 4,
        title: 'Product 4',
        oldPrice: 70.00,
        price: 55.00,
        rating: 5,
        imageName: 'prod_1.png'
      },
      {
        id: 5,
        title: 'Product 5',
        oldPrice: 50.00,
        price: 40.00,
        rating: 4,
        imageName: 'model_1.png'
      }
    ];
  }

  getPopularProducts(){
    return this.popularProducts;
  }
  getMostRatedProducts(){
    return this.popularProducts;
  }

  getMelodyKits(){
    return this.melodyKits;
  }
  getDrumKits(){
    return this.drumKits;
  }
  getVSTs(){
    return this.popularProducts;
  }

  getProduct(id: number){
    return this.popularProducts.filter(p => p.id === id)[0];
  }
}
