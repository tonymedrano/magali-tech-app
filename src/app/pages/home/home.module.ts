import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { MtComponentsModule } from "../../mt-components/mt-components.module";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MtComponentsModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ]
})
export class HomeModule {}