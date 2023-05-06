import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowsPageComponent } from './shows/shows-page/shows-page.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { QuantityPageComponent } from './shows/quantity-page/quantity-page.component';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OrderPageComponent } from './order/order-page/order-page.component';
import { AddCardsPageComponent } from './crads/add-cards-page/add-cards-page.component';
import {MatDialogModule} from "@angular/material/dialog";
import { DeliveryComponent } from './component/delivery/delivery.component';
import { PaymentComponent } from './component/payment/payment.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { CheckComponent } from './component/check/check.component';

const routes: Routes = [
  { path: '', component: ShowsPageComponent },
  { path: 'checkout/:id', component: OrderPageComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ShowsPageComponent,
    QuantityPageComponent,
    OrderPageComponent,
    AddCardsPageComponent,
    DeliveryComponent,
    PaymentComponent,
    CheckoutComponent,
    CheckComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
