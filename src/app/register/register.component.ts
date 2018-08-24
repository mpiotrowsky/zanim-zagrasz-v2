import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  email = new FormControl('');
  password = new FormControl('');
  password2 = new FormControl('');

  registerForm: FormGroup = this.builder.group({
    name: this.name,
    email: this.email,
    password: this.password,
    password2: this.password2
  });

  constructor(private builder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.wrongCredentials = false;
    if (this.password === this.password2) {
      console.log(this.registerForm.value);
    } else {
      this.wrongCredentials = true;
    }
  }

}
