import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../models/product.model';
import { ProductComponent } from "../product/product.component";

@Component({
    selector: 'app-product-carousel',
    standalone: true,
    templateUrl: './product-carousel.component.html',
    styleUrl: './product-carousel.component.css',
    imports: [ProductComponent]
})
export class ProductCarouselComponent {

  @Input() products: ProductModel[] = [];
  @Input() title: string = '';
}
