import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product: Product;
  @Input() index: number;

  //@Output() selectedItem = new EventEmitter<null>;

  constructor(private productListService: ProductListService){

  }
  
/*
  onItemClicked(){

    this.productListService.productSelectedEvent.emit(this.product);
    
  }
*/
}
