import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductLevelComponent } from './product-level/product-level.component';
import { ProductLevelTwoComponent } from './product-level-two/product-level-two.component';

const routes: Routes = [
  {
    path: 'level-satu',
    component: ProductLevelComponent,
  },
  {
    path: 'level-dua',
    component: ProductLevelTwoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
