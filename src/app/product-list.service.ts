
/* In General every class must declare at ' declarations ' in app.module.ts
   But as below class is a service class, it require to be declared at ' providers ' in app.module.ts */

import { EventEmitter } from "@angular/core";
import { Product } from "./product.model";
import { Subject } from "rxjs";

export class ProductListService{
  
  //EventEmitter functionality is to emits the value to whoever subscribe to it.
  productSelectedEvent = new EventEmitter<Product>();

  productsChanged = new Subject<Product[]>();

  products: Product[] = [
    new Product(
      'Y 81',
      'Vivo Mobile with best camera features',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc5zfX4yfqgdlHGRiGynvfPCV32njS9blTWQ&usqp=CAU',
      15000.00,
      'VIVO'
      ),
      new Product(
      'Apple 14',
      'Experience the brand of Apple Mobile & MAC',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mOVNzIWaZV2UOaOP4kfT5shOrfnfzGDxiQ&usqp=CAU',
      140000.00,
      'APPLE'
      )
  ];

  getProducts(){
    
    return this.products.slice();  // Returns the copy of an array
    
  }

  getProductsById(index: number){
    return this.products[index];
  }
//`product` receives the object of type `Product` class
  createProduct(product: Product){  //creating a new product from UI in `products` array
    this.products.push(product);
    this.productsChanged.next(this.products.slice());
  }

  updateProduct(index: number, product: Product){
    this.products[index] = product;   //updating the existing product in `products` array with new product from UI
    this.productsChanged.next(this.products.slice());
  }  



}