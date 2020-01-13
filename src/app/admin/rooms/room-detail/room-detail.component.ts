import { Component, OnInit, Input } from '@angular/core';
import { Room } from 'src/app/model/room';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

  @Input()
  room: Room;

  constructor(private router: Router,
              private dataService: DataService) { }

  ngOnInit() {
    console.log(this.room);
  }

  editRoom() {
    this.router.navigate(['admin', 'rooms'], {queryParams: {action: 'edit', id: this.room.id}});
  }

  deleteRoom() {
    this.dataService.deleteRoom(this.room.id).subscribe(
      next => this.router.navigate(['admin', 'rooms'])
    );
  }

}
