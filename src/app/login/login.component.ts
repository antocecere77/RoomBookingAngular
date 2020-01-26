import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message = '';
  name: string;
  password: string;

  constructor(private authService: AuthService,
              private route: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.authService.authenticate(this.name, this.password)) {
      const url = this.activatedRoute.snapshot.queryParams.requested;
      this.route.navigateByUrl(url);
    } else {
      this.message = 'Your username or password was not recognized - try again';
    }
  }

}
