import { Injectable } from '@angular/core';
import {Card, Checkout, Event} from "./util/interfaces";

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  constructor() { }
  private events:Event[]   = [
    {
      id: '8e02d30f-0306-42b6-a96b-1a15a9a1c4d4',
      date: '2023-06-15',
      time: '20:00',
      name: 'The Music Show',
      title: 'Summer Jamz',
      venue: 'The Arena',
      picture: 'https://example.com/images/summer-jamz.jpg',
      host: {
        name: 'Lisa Smith',
        picture: 'https://s1.ticketm.net/dam/a/128/3d4b8ab5-9062-4c04-a377-5111f8c53128_SOURCE?width=40&height=40&fit=crop&auto=webp'
      },
      amount: 2345 // initialize the amount to 0
    },
    {
      id: '17d0d4ad-c4f4-4e1a-8be1-017b857f6178',
      date: '2023-07-22',
      time: '19:30',
      name: 'Comedy Night',
      title: 'Laugh Fest',
      venue: 'The Comedy Club',
      picture: 'https://example.com/images/laugh-fest.jpg',
      host: {
        name: 'John Johnson',
        picture: 'https://s1.ticketm.net/dam/a/a52/d6d93fd3-6dd7-43f5-a635-580dc6d62a52_209371_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=40&height=40&fit=crop&auto=webp'
      },
      amount: 99.99 // initialize the amount to 0
    },
    {
      id: '7da5f5d5-7a5b-4a87-9e4d-f4de85c4fdd8',
      date: '2023-08-18',
      time: '21:00',
      name: 'Theater Show',
      title: "A Midsummer Night's Dream",
      venue: 'The Globe Theater',
      picture: 'https://example.com/images/midsummer-nights-dream.jpg',
      host: {
        name: 'Sarah Lee',
        picture: 'https://s1.ticketm.net/dam/a/4c8/cee4224d-ed9f-4267-81a4-61be2a1f44c8_SOURCE?width=40&height=40&fit=crop&auto=webp'
      },
      amount: 1341.99 // initialize the amount to 0
    }
  ];
  private checkout = new Map<string,Checkout>();

  private cards:Card[]  = [];

  public getEvents() {
    return this.events;
  }

  public getEventsById(id:string|null):Event|undefined {
    return this.events.find(value => value.id == id);
  }

  public getCheckout():Map<string,Checkout> {
    return this.checkout;
  }

 public setCheckout(data:Checkout):Map<string,Checkout>{
    return this.checkout.set(data.events.id,data);
  }

 public getCheckoutById(id:string):Checkout|undefined {
    return this.checkout.get(id)
  }

  public deleteCheckoutById(id:string):Boolean {
    return this.checkout.delete(id);
  }

  public addCards(data:Card):Card[]{
    this.cards.push(data)
    return this.cards;
  }

  public updateCards(data:Card):Card[]{
   this.cards =  this.cards.map(value=> value.id === data.id?data:value);
   return this.cards;
  }
  public removeCard(id:string):Card[]{
    this.cards = this.cards.filter(value => value.id !== id);
    return this.cards;
  }

  public getCardById(id:string):Card|undefined{
    return this.cards.find(value => value.id === id);
  }
  public getCard():Card[]{
    return this.cards;
  }
}
