import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

import { MtComponentsModule } from "../../mt-components/mt-components.module";


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    MtComponentsModule,
    RouterModule.forChild([{ path: '', component: AboutComponent }]),
  ]
})
export class AboutModule {}

