import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post(this.url + 'users/register', user);
  }

  authenticateUser(user) {
    return this.http.post(this.url + 'users/authenticate', user);
  }

  getProfile() {
    this.loadToken();
    const headers = new HttpHeaders({
      'Authorization': this.authToken
    });
    return this.http.get(this.url + 'users/profile', {headers: headers});
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
