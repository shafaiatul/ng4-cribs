import { Component, OnInit, Input } from '@angular/core';
import { Crib } from './../crib';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {
  @Input('crib') crib: Crib; // We have a Input called 'crib' and we want to assign to the Property called CRIB

  constructor() { }

  ngOnInit() {
    const  bathroom = this.crib.bathrooms;
  }

}
