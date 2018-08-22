import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  wrongCredentials = false;
  response;

  email = new FormControl('');
  password = new FormControl('');

  loginForm: FormGroup = this.builder.group({
    email: this.email,
    password: this.password
  });

  constructor(private builder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.wrongCredentials = false;
    this.http.post('', this.loginForm.value).subscribe(
      res => {
        console.log(res);
        this.wrongCredentials = false;
      },
      err => {
        this.wrongCredentials = true;
        console.log('Error occured');
        console.log(err);
      },
      () => console.log('success')
    );
  }

}
