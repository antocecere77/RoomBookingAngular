import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Room } from 'src/app/model/room';
import { ActivatedRoute, Router } from '@angular/router';
import { FormResetService } from 'src/app/form-reset-service.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Array<Room>;
  selectedRoom: Room;
  action: string;
  loadingData = true;
  message = 'Please wait... getting the list of rooms';
  reloadAttemps = 0;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router,
              private formResetService: FormResetService) { }

  ngOnInit() {
    this.loadData();
  }

  processUrlParams() {
    this.route.queryParams.subscribe(
      (params) => {
        this.action = null;
        const id = params.id;
        if (id) {
          this.selectedRoom = this.rooms.find(room => room.id === +id);
          this.action = params.action;
        }
        if (params.action === 'add') {
          this.selectedRoom = new Room();
          this.action = 'edit';
          this.formResetService.resetRoomFormEvent.emit(this.selectedRoom);
        }
      }
    );
  }

  loadData() {
    this.dataService.getRooms().subscribe(
      (next) => {
        this.rooms = next;
        this.loadingData = false;
        this.processUrlParams();
      },
      (error) => {
        if (error.status === 402) {
          this.message = 'Sorry - you need to pay to use this application';
        } else {
          this.reloadAttemps++;
          if (this.reloadAttemps <= 10) {
            this.message = 'Sorry - something went wrong, try again... please wait';
            this.loadData();
            console.log(error);
          } else {
            this.message = 'Sorry - something went wrong, please contact support';
          }
        }
      }
    );
  }

  setRoom(id: number) {
    this.router.navigate(['admin', 'rooms'], {queryParams: {id, action: 'view'}});
  }

  addRoom() {
    this.router.navigate(['admin', 'rooms'], {queryParams: {action: 'add'}});
  }

}
