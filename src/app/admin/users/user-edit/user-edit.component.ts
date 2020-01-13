import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User } from 'src/app/model/user';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { FormResetService } from 'src/app/form-reset-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {

  @Input()
  user: User;

  formUser: User;

  message: string;

  password: string;
  password2: string;

  nameIsValid = false;
  passwordsAreValid = false;
  passwordsMatch = false;

  userResetSubscription: Subscription;

  constructor(private dataService: DataService,
              private router: Router,
              private formResetService: FormResetService) { }

  ngOnInit() {
   this.initializeForm();
   this.userResetSubscription = this.formResetService.resetUserFormEvent.subscribe(
     user => {
      this.user = user;
      this.initializeForm();
     }
   );
  }

  ngOnDestroy(): void {
    this.userResetSubscription.unsubscribe();
  }

  initializeForm() {
    this.formUser = Object.assign({}, this.user);
    console.log(this.formUser.id);
    this.checkIfNameIsValid();
    this.checkIfPasswordAreValid();
  }

  onSubmit() {
    // console.log('We need to save the user ', this.formUser);

    if (this.formUser.id == null) {
      this.dataService.addUser(this.formUser, this.password).subscribe(
        (user) => {
          this.router.navigate(['admin', 'users'], {queryParams: {action: 'view', id: user.id}});
        }
      );
    } else {
      this.dataService.updateUser(this.formUser).subscribe(
        (user) => {
          this.router.navigate(['admin', 'users'], {queryParams: {action: 'view', id: user.id}});
        }
      );
    }
  }

  checkIfNameIsValid() {
    if (this.formUser.name) {
      this.nameIsValid = this.formUser.name.trim().length > 0;
    } else {
      this.nameIsValid = false;
    }
  }

  checkIfPasswordAreValid() {
    if (this.formUser.id != null) {
      this.passwordsAreValid = true;
      this.passwordsMatch = true;
    } else {
      this.passwordsMatch = this.password === this.password2;
      if (this.password) {
        this.passwordsAreValid = this.password.trim().length > 0;
      } else {
        this.passwordsAreValid = false;
      }
    }
  }

}
