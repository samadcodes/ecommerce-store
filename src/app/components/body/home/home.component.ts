import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../../../models/hero.model';
import { HeroComponent } from '../../shared/hero/hero.component';
import { ProductGridComponent } from "../../shared/product-grid/product-grid.component";
import { ProductService } from '../../../services/product.service';
import { ProductModel } from '../../../models/product.model';
import { ProductCarouselComponent } from '../../shared/product-carousel/product-carousel.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeroComponent, ProductGridComponent, ProductCarouselComponent]
})
export class HomeComponent implements OnInit {
  topHero!: HeroModel;
  bottomHero!: HeroModel;
  popularProducts: ProductModel[] = [];
  mostRatedProducts: ProductModel[] = [];

  constructor(private productService: ProductService) {
    this.initializeTopHero();
    this.initializeBottomHero();
  }

  ngOnInit(): void {
    this.popularProducts = this.productService.getPopularProducts();
    this.mostRatedProducts = this.productService.getMostRatedProducts();
  }

  initializeTopHero(){
    this.topHero = new HeroModel()
    this.topHero.title = '#New Summer Collection 2019';
    this.topHero.subTitle = 'Arrivals Sales';
    this.topHero.headline = 'Shop Now';
    this.topHero.heightClass = '';
    this.topHero.imageName = 'model_3.png';
  }
  initializeBottomHero(){
    this.bottomHero = new HeroModel()
    this.bottomHero.title = '#New Summer Collection 2019';
    this.bottomHero.subTitle = 'New Shoes';
    this.bottomHero.headline = 'Shop Now';
    this.bottomHero.heightClass = 'inner-page py-5';
    this.bottomHero.imageName = 'model_6.png';
  }
}
