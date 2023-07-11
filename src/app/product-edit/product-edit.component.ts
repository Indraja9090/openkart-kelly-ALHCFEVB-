import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id:number;
  editMode: boolean =false;
  productForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private productListService: ProductListService,
              private router: Router){

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id']!=null;
      this.myForm();
    } )
  }

  private myForm(){
    let productName = '';
    let productDescription = '';
    let brand = '';
    let price = null;
    let imageUrl = '';
  

    if(this.editMode){
      const product = this.productListService.getProductsById(this.id);
      productName = product.name;
      productDescription = product.description;
      brand = product.brand;
      price = product.price;
      imageUrl = product.imagePath;
    }

    this.productForm = new FormGroup({
      prodname: new FormControl(productName,Validators.required),
      imagePath: new FormControl(imageUrl),
      description: new FormControl(productDescription),
      prodbrand: new FormControl(brand),
      price: new FormControl(price)
    })
  }

  onSubmit(){
    const newProduct = new Product(this.productForm.value['prodname'],
                                   this.productForm.value['description'],
                                   this.productForm.value['imagePath'],
                                   this.productForm.value['price'],
                                   this.productForm.value['prosdbrand']
                                  );
    if(this.editMode){
      this.productListService.updateProduct(this.id, newProduct);
    }else{
      this.productListService.createProduct(newProduct);
    }
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

}
