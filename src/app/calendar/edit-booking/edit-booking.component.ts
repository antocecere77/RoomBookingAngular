import { Component, OnInit } from '@angular/core';
import {Booking} from '../../model/Booking';
import {Layout, Room} from '../../model/Room';
import {DataService} from '../../data.service';
import {User} from '../../model/User';
import {ActivatedRoute, Router} from '@angular/router';
import { EditBookingDataService } from 'src/app/edit-booking-data.service';
import { map } from 'rxjs/operators';

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

  dataLoaded = false;
  message = 'Please wait...';

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router,
              private editBookingDataService: EditBookingDataService) { }

  ngOnInit() {
    this.rooms = this.editBookingDataService.rooms;
    this.users = this.editBookingDataService.users;
    const id = this.route.snapshot.queryParams.id;
    if (id) {
      this.dataService.getBooking(+id)
      .pipe(
        map(booking => {
          booking.room = this.rooms.find(room => room.id === booking.room.id);
          booking.user = this.users.find(user => user.id === booking.user.id);
          return booking;
        })
      ).subscribe(
        next => {
          this.booking = next;
          this.dataLoaded = true;
          this.message = '';
        }
      );
    } else {
      this.booking = new Booking();
      this.dataLoaded = true;
      this.message = '';
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