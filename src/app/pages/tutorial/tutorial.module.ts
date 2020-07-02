import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TutorialComponent } from './tutorial.component';

import { MtComponentsModule } from "../../mt-components/mt-components.module";


@NgModule({
  declarations: [TutorialComponent],
  imports: [
    CommonModule,
    MtComponentsModule,
    RouterModule.forChild([{ path: '', component: TutorialComponent }]),
  ]
})
export class TutorialModule {}