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
import {FormsModule} from "@angular/forms";
import { OrderPageComponent } from './order/order-page/order-page.component';

const routes: Routes = [
  { path: '', component: ShowsPageComponent },
  { path: 'checkout', component: OrderPageComponent },
  // { path: 'add-card', component: CheckoutComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ShowsPageComponent,
    QuantityPageComponent,
    OrderPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
