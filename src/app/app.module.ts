import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
//import { LoggingService } from './logging.service';

import { MtComponentsModule } from "./mt-components/mt-components.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    MtComponentsModule
  ],
  bootstrap: [AppComponent],
  // providers: [LoggingService]
})
export class AppModule {}