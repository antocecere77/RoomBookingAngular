import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input()
  user: User;

  formUser: User;

  message: string;

  constructor() { }

  ngOnInit() {
    this.formUser = Object.assign({}, this.user);
  }

  onSubmit() {
    console.log('We need to save the user ', this.formUser);
  }

}
