import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  wrongCredentials = false;
  response;

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
    private registrationService: RegistrationService) { }

  ngOnInit() {
  }

  register() {
    console.log(this.registerForm.value);
    this.wrongCredentials = false;
    if (this.password.value === this.password2.value) {
      this.registrationService.registerUser(this.registerForm.value);
    } else {
      this.wrongCredentials = true;
    }
  }

}
