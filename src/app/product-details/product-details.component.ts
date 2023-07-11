import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductListService } from '../product-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  // @Input() clickedProduct: Product = null;

  clickedProduct: Product;
  id: number;

  constructor(private productListService: ProductListService,
              private router: Router,
              private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.clickedProduct = this.productListService.getProductsById(this.id);
    }
    )
  }
}
