import { Component, OnInit, Input } from '@angular/core';
import { Room } from 'src/app/model/room';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

  @Input()
  room: Room;

  constructor() { }

  ngOnInit() {
    console.log(this.room);
  }

}
