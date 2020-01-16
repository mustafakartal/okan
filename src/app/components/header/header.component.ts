import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private currentUserSubject: BehaviorSubject<User>;
  constructor() {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  }

  ngOnInit() {
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    window.location.reload();
  }

}
