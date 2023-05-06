import {Component, Input, OnInit} from '@angular/core';
import {formatCurrency, generateRandomID} from "../../util/helpers";
import {Checkout, Event} from "../../util/interfaces";
import {AppServiceService} from "../../app-service.service";

@Component({
  selector: 'app-quantity-page',
  templateUrl: './quantity-page.component.html',
  styleUrls: ['./quantity-page.component.css']
})
export class QuantityPageComponent implements OnInit {

 @Input() event:any = {};
  constructor(private eventService: AppServiceService) { }
 formatCurrent = (amount:number, currency:string)=>formatCurrency(amount,currency);
  checkoutInit:Checkout = {
    id:generateRandomID(16),
    count:0,
    date:new Date().toString(),
    user_id:1,
    events:this.event as Event
  }
 checkoutEven:Checkout =  this.checkoutInit;
 add(add:number){
   this.checkoutEven.count += add;
   if (this.checkoutEven.count < 0) this.checkoutEven.count = 0;
   this.eventService.setCheckout(this.checkoutEven)
 }
  ngOnInit(): void {
   this.checkoutInit.events = this.event;
    this.checkoutEven =  this.eventService.getCheckoutById(this.event.id)??this.checkoutInit;
  }
}
