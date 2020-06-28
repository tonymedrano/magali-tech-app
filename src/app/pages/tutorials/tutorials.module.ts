import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TutorialsComponent } from './tutorials.component';


@NgModule({
  declarations: [TutorialsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TutorialsComponent }]),
  ]
})
export class TutorialsModule {}