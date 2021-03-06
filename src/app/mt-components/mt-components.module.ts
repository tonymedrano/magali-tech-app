import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MtHeaderComponent } from "./mt-header/mt-header.component";
import { MtFooterComponent } from "./mt-footer/mt-footer.component";


@NgModule({
  declarations: [MtHeaderComponent, MtFooterComponent],
  exports: [MtHeaderComponent, MtFooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class MtComponentsModule { }
