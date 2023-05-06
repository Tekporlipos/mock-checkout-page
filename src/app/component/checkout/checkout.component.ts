import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppServiceService} from "../../app-service.service";
import {formatCurrency} from "../../util/helpers";
import {Checkout, Event} from "../../util/interfaces";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  event:Event = {} as Event;
  checkout:Checkout = {} as Checkout
  constructor(private eventService: AppServiceService,private route: ActivatedRoute) { }
  formatCurrent = (amount:number, currency:string)=>formatCurrency(amount,currency);
  ngOnInit(): void {
    const id:string = this.route.snapshot.paramMap.get('id')??"";
    this.checkout.events = this.eventService.getEventsById(id)??this.event;
    this.checkout =  this.eventService.getCheckoutById(id)??this.checkout;
  }

  getCount():number{
    return this.checkout?.count != null?this.checkout.count:1;
  }

}
