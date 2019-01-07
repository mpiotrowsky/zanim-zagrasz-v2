import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  wrongCredentials: boolean;
  response;
  userLoggedIn: boolean;
  loginError: boolean;

  username = new FormControl('');
  password = new FormControl('');

  loginForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password
  });

  constructor(private builder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.authenticateUser(this.loginForm.value).subscribe(data => {
      console.log(data);
      this.response = data;
      if (this.response.success === true) {
        this.userLoggedIn = true;
        this.authService.storeUserData(this.response.token, this.response.user);
        this.router.navigate(['profile']);
      } else if (this.response.msg === 'Wrong password') {
        this.wrongCredentials = true;
      } else {
        this.loginError = true;
      }
    });
  }

}
