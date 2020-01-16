import { Component } from '@angular/core';
import { AuthenticationService } from './services/authservice/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  isAuthenticated: boolean;
  constructor(private authService: AuthenticationService) {
    this.isAuthenticated = this.authService.isAuthenticated;
  }
}
