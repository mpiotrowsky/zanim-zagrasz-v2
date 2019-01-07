import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  wrongCredentials = false;
  response;
  userRegistered: boolean;
  registrationError: boolean;

  name = new FormControl('');
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  password2 = new FormControl('');

  registerForm: FormGroup = this.builder.group({
    name: this.name,
    username: this.username,
    email: this.email,
    password: this.password,
    password2: this.password2
  });

  constructor(private builder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.wrongCredentials = false;
    if (this.password.value === this.password2.value) {
      this.authService.registerUser(this.registerForm.value).subscribe(data => {
        this.response = data;
        if (this.response.success === true) {
          this.userRegistered = true;
        } else {
          this.registrationError = true;
        }
      });
    } else {
      this.wrongCredentials = true;
    }
  }

}
