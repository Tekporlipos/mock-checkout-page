import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AppServiceService} from "../../app-service.service";
import {generateRandomID} from "../../util/helpers";
import {Card} from "../../util/interfaces";

@Component({
  selector: 'app-add-cards-page',
  templateUrl: './add-cards-page.component.html',
  styleUrls: ['./add-cards-page.component.css']
})
export class AddCardsPageComponent implements OnInit{
  @Input() card: Card = {} as Card;
  creditCardForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private eventService: AppServiceService) {
    this.creditCardForm = this.set();
  }

  onSubmit():void {
    const cardNew = {name:this.creditCardForm.value.cardName,
      number:this.creditCardForm.value.cardNumber,
      expiration:this.creditCardForm.value.expirationDate,
      cvv:this.creditCardForm.value.cvv,
      id:this.card?.id??generateRandomID(16)}
    if (this.creditCardForm.valid) {
      if (this.card?.id) {
        this.eventService.updateCards(cardNew)
      }else {
        this.eventService.addCards(cardNew);
      }
    }
  }

  ngOnInit(): void {
    this.creditCardForm =  this.set();
  }

  set(){
   return this.formBuilder.group({
      cardName: [this.card?.name, Validators.required],
      cardNumber: [this.card?.number, Validators.required],
      expirationDate: [this.card?.expiration, Validators.required],
      cvv: [this.card?.cvv, Validators.required],
    });
  }



}
