import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { ProductModel } from '../../../models/product.model';
import { IterablePipe } from "../../../pipes/iterable.pipe";
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.css',
    imports: [IterablePipe, CurrencyPipe]
})
export class ProductDetailComponent implements OnInit {
  productId: number = 0;
  product!: ProductModel;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.productId = Number(this.route.snapshot.params['id']);
    
    if (this.productId) {
      this.product = this.productService.getProduct(this.productId)
    }
  }

}
