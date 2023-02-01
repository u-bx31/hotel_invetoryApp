import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of, throwError } from 'rxjs';
import { RoomService } from '../../managment/rooms/service/room.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  valid: boolean = false;

  constructor(
    private router: Router,
    private Cookie: CookieService,
    private service: RoomService
  ) {
    this.service.getEmployes$.subscribe((res) => {
      this.employe = res
    });
  }

  employe: any = [];
  employe1: any = {};
  setToken = (token: string): void => {
    this.Cookie.set('token', token, { expires: 1, sameSite: 'Lax' });
  };

  getToken = (): string | null => {
    return this.Cookie.get('token');
  };

  isLoggedIn = (): any => {
    return this.getToken() != '';
  };

  logOut = () => {
    this.Cookie.delete('token');
    this.employe1 = [];
    this.router.navigate(['admin']);
  };
  logIn = (email: string, password: string): Observable<any> => {
    this.employe1 = this.employe.find((val: any) => {
      return val.email === email && val.password === password;
    });
    if (Object.keys(this.employe1).length !== 0) {
      console.log(this.getToken());
      this.setToken('dgdkjfhgjdhgadmingfdjsfhdf');
      this.employe1 = {};
      return of([]);
    }
    else{
      return throwError(new Error('Faild to Login'));
    }

  };
}
