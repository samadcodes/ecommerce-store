import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { ProductGridComponent } from "../../shared/product-grid/product-grid.component";
import { ProductModel } from '../../../models/product.model';

@Component({
  selector: 'app-shop',
  standalone: true,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
  imports: [ProductGridComponent]
})
export class ShopComponent {

  category: string = '';
  shopProducts: ProductModel[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.route.params.subscribe(params => {
      this.category = String(params['category']);
      this.handleCategory(this.category);
    });
  }

  handleCategory(category: string): void {
    switch (category) {
      case 'melodykits':
        this.fetchMelodyKits();
        break;
      case 'drumkits':
        this.fetchDrumKits();
        break;
      case 'vstplugins':
        this.fetchVSTPlugins();
        break;
      default:
        this.fetchDefaultCategory();
        break;
    }
  }

  fetchMelodyKits(): void {
    this.shopProducts = this.productService.getMelodyKits();
  }

  fetchDrumKits(): void {
    this.shopProducts = this.productService.getDrumKits();
  }

  fetchVSTPlugins(): void {
    this.shopProducts = this.productService.getVSTs();
  }

  fetchDefaultCategory(): void {
    this.shopProducts = this.productService.getPopularProducts();
  }
}
