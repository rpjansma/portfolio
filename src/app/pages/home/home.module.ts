
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgxMailtoModule } from 'ngx-mailto';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HomeRoutingModule, NgxMailtoModule],
  exports: [HomeComponent],
})
export class HomeModule {}
