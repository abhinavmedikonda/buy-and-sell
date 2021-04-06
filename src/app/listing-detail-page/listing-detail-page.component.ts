import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.scss']
})
export class ListingDetailPageComponent implements OnInit {
  listing: Listing = <Listing>{};

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(fakeListings.findIndex(listing => listing.id === id) >= 0){
      this.listing = fakeListings[fakeListings.findIndex(listing => listing.id === id)];
    }
  }

}
