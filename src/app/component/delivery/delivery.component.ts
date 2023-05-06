import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
   daysToAdd = (Math.random()*10)+1;
  getFormattedDate(): string {
    const date = new Date();
    date.setDate(date.getDate() + this.daysToAdd);
    return date.toLocaleDateString('en-US',{ weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
  }
}
