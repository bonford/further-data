import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'map-footer',
  template: '<div class="map-footer">&#169;{{date | date: "yyyy" }} further data</div>',
  styleUrls: ['./map-footer.component.css']
})
export class MapFooterComponent implements OnInit {

  private date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
