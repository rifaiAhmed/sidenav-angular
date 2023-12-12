import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductLevelComponent } from './product-level/product-level.component';
import { ProductLevelTwoComponent } from './product-level-two/product-level-two.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductLevelComponent,
    ProductLevelTwoComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
