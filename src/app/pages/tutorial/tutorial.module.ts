import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TutorialComponent } from './tutorial.component';


@NgModule({
  declarations: [TutorialComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TutorialComponent }]),
  ]
})
export class TutorialModule {}