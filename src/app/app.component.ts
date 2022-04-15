import { Component,ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})

export class AppComponent {
  title = 'Education';
  showFiller = false;
  num=5;
  hidden = false;
  panelOpenState = false;
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
