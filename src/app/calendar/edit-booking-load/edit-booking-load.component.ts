import { Component, OnInit } from '@angular/core';
import { EditBookingDataService } from 'src/app/edit-booking-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-booking-load',
  templateUrl: './edit-booking-load.component.html',
  styleUrls: ['./edit-booking-load.component.css']
})
export class EditBookingLoadComponent implements OnInit {

  constructor(private editBookingDataService: EditBookingDataService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    setTimeout(() => this.navigateWhenReady(), 1000);
  }

  navigateWhenReady() {
    if (this.editBookingDataService.dataLoaded === 2) {
      const id = this.route.snapshot.queryParams.id;
      if (id) {
        this.router.navigate(['editBooking'], {queryParams: {id}});
      } else {
        this.router.navigate(['addBooking']);
      }
    } else {
      setTimeout(() => this.navigateWhenReady(), 500);
    }
  }
}
