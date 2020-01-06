import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advertiser-details',
  templateUrl: './advertiser-details.component.html',
  styleUrls: ['./advertiser-details.component.scss']
})
export class AdvertiserDetailsComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/advertisers', {}]);
  }

}
