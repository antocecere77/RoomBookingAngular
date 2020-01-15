import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/model/booking';
import { Room, Layout } from 'src/app/model/room';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/model/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {

  booking: Booking;
  rooms: Array<Room>;
  layouts = Object.keys(Layout);
  layoutEnum = Layout;
  users: Array<User>;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.dataService.getRooms().subscribe(
      next => this.rooms = next
    );
    this.dataService.getUsers().subscribe(
      next => this.users = next
    );

    const id = this.route.snapshot.queryParams.id;
    if (id) {
      this.dataService.getBooking(+id).subscribe(
        next => this.booking = next
      );
    } else {
      this.booking = new Booking();
    }
  }

  onSubmmit() {
    if (this.booking.id != null) {
      this.dataService.saveBooking(this.booking).subscribe(
        next => this.router.navigate([''])
      );
    } else {
      this.dataService.addBooking(this.booking).subscribe(
        next => this.router.navigate([''])
      );
    }
  }

}
