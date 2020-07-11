import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MtHeaderComponent } from "./mt-header/mt-header.component";
import { MtFooterComponent } from "./mt-footer/mt-footer.component";
import { MtToggleComponent } from "./mt-toggle/mt-toggle.component";
import { MtLoaderComponent } from './mt-loader/mt-loader.component';
import { MtCarouselComponent } from './mt-carousel/mt-carousel.component';
import { MtFeatureComponent } from './mt-feature/mt-feature.component';
import { MtCardComponent } from './mt-card/mt-card.component';
import { MtFeatureDividerComponent } from './mt-feature-divider/mt-feature-divider.component';

@NgModule({
  declarations: [
    MtHeaderComponent, 
    MtFooterComponent,
    MtToggleComponent,
    MtLoaderComponent,
    MtCarouselComponent,
    MtFeatureComponent,
    MtCardComponent,
    MtFeatureDividerComponent
  ],
  exports: [
    MtHeaderComponent, 
    MtFooterComponent,
    MtToggleComponent,
    MtLoaderComponent,
    MtCarouselComponent,
    MtFeatureComponent,
    MtCardComponent,
    MtFeatureDividerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class MtComponentsModule { }
