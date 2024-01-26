import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [

  ],
  imports: [CommonModule, PagesRoutingModule, SharedModule, HomeModule],
  exports: [],
})
export class PagesModule {}
