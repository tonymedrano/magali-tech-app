import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtHeaderComponent } from "./mt-header/mt-header.component";
import { MtFooterComponent } from "./mt-footer/mt-footer.component";


@NgModule({
  declarations: [MtHeaderComponent, MtFooterComponent],
  exports: [MtHeaderComponent, MtFooterComponent],
  imports: [
    CommonModule
  ],
})
export class MtComponentsModule { }
