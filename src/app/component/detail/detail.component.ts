import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  data;
  constructor(private router: Router, private route: ActivatedRoute,private _location: Location) {
    console.log(this.router.getCurrentNavigation().extras.state);
    this.data = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {
  }

  back() {
    this._location.back();
  }

}
