import { Component, Input } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductModel } from '../../../models/product.model';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.css'
})
export class ProductGridComponent {

  @Input() products: ProductModel[] = [];
  @Input() title: string = '';

  
}
