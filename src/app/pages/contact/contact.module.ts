import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';

import { MtComponentsModule } from "../../mt-components/mt-components.module";


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    MtComponentsModule,
    RouterModule.forChild([{ path: '', component: ContactComponent }]),
  ]
})
export class ContactModule {}