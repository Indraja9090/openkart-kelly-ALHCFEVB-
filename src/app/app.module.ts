import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ManageButtonDirective } from './product-details/customize-attribute.directive';
import { ProductListService } from './product-list.service';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProductStartComponent } from './product-start/product-start.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductDetailsComponent,
    OrderListComponent,
    ProductItemComponent,
    ManageButtonDirective,
    RegisterFormComponent,
    ProductStartComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProductListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
