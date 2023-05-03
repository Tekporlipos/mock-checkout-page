import { Component } from '@angular/core';

@Component({
  selector: 'app-shows-page',
  templateUrl: './shows-page.component.html',
  styleUrls: ['./shows-page.component.css']
})
export class ShowsPageComponent {

  addToCheckout(show:any): void {
    show.selected = true;
    // Implement logic to add show to checkout here
  }
  upcomingShows = [
    {
      name: 'Hamilton',
      datetime: 'July 1, 2023 7:30 PM',
      host: 'Richard Rodgers Theatre',
      selected: false
    },
    {
      name: 'Wicked',
      datetime: 'August 15, 2023 2:00 PM',
      host: 'Gershwin Theatre',
      selected: false
    },
    {
      name: 'The Lion King',
      datetime: 'September 30, 2023 8:00 PM',
      host: 'Minskoff Theatre',
      selected: false
    }
  ];
}
