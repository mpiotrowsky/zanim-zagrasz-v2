import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  authToken: any;
  user: any;
  url = 'http://localhost:3000/';
  userRegistered: boolean;
  userRegistration: EventEmitter<any> = new EventEmitter();


  constructor(private http: HttpClient) { }

  registerUser(user) {
    this.http.post(this.url + 'users/register', user).subscribe(
      res => {
        console.log(res);
        this.userRegistration.emit(true);
      },
      err => {
        console.log('Error occured');
        console.log(err);
        this.userRegistration.emit(false);
      },
      () => console.log('success')
    );
  }
}
