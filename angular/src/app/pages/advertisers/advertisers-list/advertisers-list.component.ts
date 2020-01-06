import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advertisers',
  templateUrl: './advertisers-list.component.html',
  styleUrls: ['./advertisers-list.component.scss']
})
export class AdvertisersListComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  createAdvertiser() {
    this.router.navigate(['/advertisers/create', {}]);
  }

}
