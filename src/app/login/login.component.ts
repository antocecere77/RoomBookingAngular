import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  message = '';
  name: string;
  password: string;
  subscription: Subscription;

  constructor(private authService: AuthService,
              private route: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.authService.authenticationResultEvent.subscribe(
      result => {
        if (result) {
          const url = this.activatedRoute.snapshot.queryParams.requested;
          this.route.navigateByUrl(url);
        } else {
          this.message = 'Your username or password was not recognized - try again';
        }
      }
    );
  }

  onSubmit() {
    this.authService.authenticate(this.name, this.password);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
