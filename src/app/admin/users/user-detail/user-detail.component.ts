import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user';
import { Data } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input()
  user: User;

  constructor() { }

  ngOnInit() {
  }

}
