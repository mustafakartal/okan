import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, UserLoginDto } from 'src/app/models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public get isAuthenticated(): boolean {
        let isAuth = false;
        if (this.currentUserSubject && this.currentUserSubject.value) {
            isAuth = true;
        }
        return isAuth;
    }

    login(username: string, password: string) {
        const request = {
            UserName: username,
            Password: password
        };
        var returnData = new UserLoginDto();
        localStorage.setItem('currentUser', JSON.stringify("user.Data"));
        const userInfo = new User();
        userInfo.NameSurname = username;
        userInfo.SessionKey = "123qwe123qwe";
        userInfo.UserName = username;
        this.currentUserSubject.next(userInfo);
        return returnData;
        //return this.http.post<any>(`http://admin.mustafakartal.info/api/bo/login`, request)
        //   .pipe(map((user: UserLoginDto) => {
        //       if (user && user.Status === true) {
        //           localStorage.setItem('currentUser', JSON.stringify(user.Data));
        //           const userInfo = new User();
        //           userInfo.NameSurname = user.Data.NameSurname;
        //           userInfo.SessionKey = user.Data.SessionKey;
        //          userInfo.UserName = user.Data.UserName;
        //           this.currentUserSubject.next(userInfo);
        //        }
        //        return user;
        //}));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}