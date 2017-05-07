import { Component, OnInit } from '@angular/core';
import { CribsService } from './../services/cribs.service';
import { UtilService } from './../services/util.service';


@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {
  cribs: Array<any>;
  sortFields: Array<any> = [
    'address',
    'area',
    'bathrooms',
    'bedrooms',
    'price',
    'type'
  ];
  sortField: string = 'price';
  sortDirection:string = 'asc';

  constructor(
    private cribsService: CribsService,
    private utilService: UtilService
    ) { }

  ngOnInit() {
    // Make HTTP request
    this.cribsService.getAllCribs()
      .subscribe(
        data => this.cribs = data
      );
    this.cribsService.newCribSubject.subscribe(
      data => this.cribs = [data, ...this.cribs]
    )
  }

}
