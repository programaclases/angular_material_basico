import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-basico';

  constructor(date: DateAdapter<Date>) {
    date.getFirstDayOfWeek = () => 1;
  }
}
