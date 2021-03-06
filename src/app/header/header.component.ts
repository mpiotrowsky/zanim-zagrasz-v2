import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    public authService: AuthService) { }

  ngOnInit() {
    this.authService.loggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}
