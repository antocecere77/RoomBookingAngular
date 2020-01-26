import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message = '';
  name: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.authService.authenticate(this.name, this.password)) {
      // navigation
    } else {
      this.message = 'Your username or password was not recognized - try again';
    }
  }

}
