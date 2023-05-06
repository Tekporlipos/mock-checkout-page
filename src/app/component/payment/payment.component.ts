import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddCardsPageComponent} from "../../crads/add-cards-page/add-cards-page.component";
import {Card} from "../../util/interfaces";
import {AppServiceService} from "../../app-service.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  constructor(public dialog: MatDialog,private eventService: AppServiceService) {}


  cards:Card[] = this.eventService.getCard()

  openModal(id:string) {
    const modalRef =  this.dialog.open(AddCardsPageComponent);
    modalRef.componentInstance.card = this.eventService.getCardById(id) as Card;
  }

  delete(id:string){
   this.cards = this.eventService.removeCard(id)
  }
}
