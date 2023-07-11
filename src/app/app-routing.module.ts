import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { OrderListComponent } from "./order-list/order-list.component";
import { ProductStartComponent } from "./product-start/product-start.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { NgModule } from "@angular/core";
import { ProductItemComponent } from "./product-item/product-item.component";
import { RegisterFormComponent } from "./register-form/register-form.component";

const appRoutes: Routes = [
/* Here empty path means root url i.e., http://localhost:4200/ which will be to path `/products` i.e.,
                                 http://localhost:4200/products         */               
    {path: "", redirectTo: "/products", pathMatch: "full"},
    {path: "products", component: ProductListComponent,
                children: [
                    /* If we have empty path after `/products` in url i.e., http://localhost:4200/products/
                                            `ProductStartComponent` will be initialize        */
                    {path: "", component: ProductStartComponent},
                    //if we match to `new` after `/products` in url i..e, http://localhost:4200/products/new 
                    {path: "new", component: ProductEditComponent},
                    {path: ":id", component: ProductDetailsComponent}, //http://localhost:4200/products/id
                    {path: ":id/edit", component: ProductEditComponent},//http://localhost:4200/products/id/edit
                ]},
    {path: "orders", component: OrderListComponent},
    {path: "register", component: RegisterFormComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}