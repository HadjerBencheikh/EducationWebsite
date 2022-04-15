import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sid-nav',
  templateUrl: './sid-nav.component.html',
  styleUrls: ['./sid-nav.component.css']
})
export class SidNavComponent implements OnInit {
  showFiller = false;
  num=5;
  panelOpenState = false;
 icon=0;
 
  constructor() { }

  ngOnInit(): void {
  }

}
