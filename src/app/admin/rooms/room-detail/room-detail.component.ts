import { Component, OnInit, Input } from '@angular/core';
import { Room } from 'src/app/model/room';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

  @Input()
  room: Room;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.room);
  }

  editRoom() {
    this.router.navigate(['admin', 'rooms'], {queryParams: {action: 'edit', id: this.room.id}});
  }

}
