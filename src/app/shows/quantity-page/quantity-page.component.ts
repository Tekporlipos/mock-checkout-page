import { Component } from '@angular/core';

@Component({
  selector: 'app-quantity-page',
  templateUrl: './quantity-page.component.html',
  styleUrls: ['./quantity-page.component.css']
})
export class QuantityPageComponent {
  selectedQuantity: any;
  quantities = [1, 2, 3, 4, 5];

}
