import { Injectable, EventEmitter } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = false;
  authenticationResultEvent = new EventEmitter<boolean>();

  role: string;

  constructor(private dataService: DataService) { }

  authenticate(name: string, password: string) {
    this.dataService.validateUser(name, password).subscribe(
      next => {
        this.setupRole();
        this.isAuthenticated = true;
        this.authenticationResultEvent.emit(true);
      },
      error => {
        this.isAuthenticated = false;
        this.authenticationResultEvent.emit(false);
      }
    );
  }

  setupRole() {
    this.dataService.getRole().subscribe(
      next => {
        this.role = next.role;
      }
    );
  }

  // constgetRole(): string {
    // if (this.jwtToken == null) { return null; }
    // const encodedPayload = this.jwtToken.split('.')[1];
    // const payload = atob(encodedPayload);
    // return JSON.parse(payload).role;
 //   return 'ADMIN';
 // }
}
