import { Component } from '@angular/core';
import {AddCardsPageComponent} from "../../crads/add-cards-page/add-cards-page.component";
import {MatDialog} from "@angular/material/dialog";
import {AppServiceService} from "../../app-service.service";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent {
  constructor(private eventService: AppServiceService) { }
}
