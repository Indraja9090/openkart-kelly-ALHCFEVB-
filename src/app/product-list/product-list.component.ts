import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../product.model';
import { ProductListService } from '../product-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  //@Output() selectedProductItem = new EventEmitter<Product>;

  products: Product[];

  // Dependency injection - Angular injects an instance of ProductListService
  constructor(private productListService: ProductListService,
              private router: Router){

  }
  
  //ngOnInit()-Will be executed only after constructor() got executed.Hence we can use above instance(i.e.,obj)
  ngOnInit(){

    this.products = this.productListService.getProducts();
    this.productListService.productsChanged.subscribe((products: Product[]) => {
      this.products = products;
    })

  }

  /* onItemSelected( product: Product){

    this.selectedProductItem.emit(product);
  } */
 
}

