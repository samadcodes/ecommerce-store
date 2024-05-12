import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../models/product.model';
import { IterablePipe } from "../../../pipes/iterable.pipe";
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    imports: [IterablePipe, CurrencyPipe, RouterLink]
})
export class ProductComponent {

  @Input() product!: ProductModel;
  
}
