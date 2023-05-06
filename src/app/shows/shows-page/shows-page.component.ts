import {Component, OnInit} from '@angular/core';
import {AppServiceService} from "../../app-service.service";
import {getDayFromDate,formatDate} from "../../util/helpers";

@Component({
  selector: 'app-shows-page',
  templateUrl: './shows-page.component.html',
  styleUrls: ['./shows-page.component.css']
})
export class ShowsPageComponent implements OnInit {
  events: any[] = [];

  at:number = -1;


  constructor(private eventService: AppServiceService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  public getDayOfWeek(date:string): string {
    return getDayFromDate(date);
  }

  public showTickets(id:number){
    this.at = id;
  }


  public getMonthAndDay(date:string): string {
    return formatDate(date);
  }

}
