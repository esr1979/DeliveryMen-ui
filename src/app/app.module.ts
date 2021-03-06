import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliverymenComponent } from './deliverymen/deliverymen.component';
import { DeliverymenlistComponent } from './deliverymen/deliverymenlist/deliverymenlist.component';
import {DeliverymanService} from "./deliverymen/services/deliveryman.service";
import { DeliverymanFormComponent } from './deliverymen/deliveryman-form/deliveryman-form.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DeliverymenComponent,
    DeliverymenlistComponent,
    DeliverymanFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DeliverymanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
