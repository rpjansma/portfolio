import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';
import { ProductModule } from './productLandingPage/product.module';

@NgModule({
  declarations: [

  ],
  imports: [CommonModule, PagesRoutingModule, SharedModule, HomeModule, ProductModule],
  exports: [],
})
export class PagesModule {}
