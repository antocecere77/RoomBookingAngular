import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/model/user';
import { Router, ActivatedRoute } from '@angular/router';
import { FormResetService } from 'src/app/form-reset-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User>;

  selectedUser: User;
  action: string;

  constructor(private dataService: DataService,
              private router: Router,
              private route: ActivatedRoute,
              private formResetService: FormResetService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(
      (next) => {
        this.users = next;
      }
    );
    this.route.queryParams.subscribe((params) => {
      const id = params.id;
      this.action = params.action;
      if (id) {
        this.selectedUser = this.users.find(user => user.id === +id);
      }
    });
  }

  selectUser(id: number) {
    this.router.navigate(['admin', 'users'], {queryParams: {id, action: 'view'}});
  }

  addUser() {
    this.selectedUser = new User();
    this.router.navigate(['admin', 'users'], {queryParams: {action: 'add'}});
    this.formResetService.resetUserFormEvent.emit(this.selectedUser);
  }

}
