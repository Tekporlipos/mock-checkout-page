import { Component } from '@angular/core';
import {AddCardsPageComponent} from "../../crads/add-cards-page/add-cards-page.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent {
  constructor(public dialog: MatDialog) {}

  openModal() {
    this.dialog.open(AddCardsPageComponent);
  }
}
