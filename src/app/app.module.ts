import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliverymenComponent } from './deliverymen/deliverymen.component';
import { DeliverymenlistComponent } from './deliverymen/deliverymenlist/deliverymenlist.component';

@NgModule({
  declarations: [
    AppComponent,
    DeliverymenComponent,
    DeliverymenlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
