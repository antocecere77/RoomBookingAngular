import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/model/booking';
import { Room, Layout } from 'src/app/model/room';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/model/user';

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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getRooms().subscribe(
      next => this.rooms = next
    );

    this.dataService.getUsers().subscribe(
      next => this.users = next
    );
  }

}
