import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OpenKart';
  //selectLink: string = '';
  //selectedProduct: Product;
/*
  onAppHeaderClick(emittedSelectedLink: string){

    this.selectLink = emittedSelectedLink;     // The click event value which was sent from "header Component",
                                                 will be stored in selectLink 
  }
*/
  constructor(private productListService: ProductListService){

  }

  ngOnInit(){
    //this.productListService.productSelectedEvent.subscribe((products: Product)=>{this.selectedProduct = products;})
  } 

  /*onSelectedProductItem(product: Product){

    this.selectedProduct = product;
    
  }*/
}
