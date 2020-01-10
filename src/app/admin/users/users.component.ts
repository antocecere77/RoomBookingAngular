import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/model/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User>;
  selectedUser: User;

  constructor(private dataService: DataService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(
      (next) => {
        this.users = next;
      }
    );
    this.route.queryParams.subscribe((params) => {
      const id = params.id;
      this.selectedUser = this.users.find(user => user.id === +id);
    });
  }

  selectUser(id: number) {
    this.router.navigate(['admin', 'users'], {queryParams: {id}});
  }

}
