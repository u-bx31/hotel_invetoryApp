import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RoomService } from '../../managment/rooms/service/room.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  valid: boolean = false;
  loading: boolean = false;
  employeesFetched : boolean = false;
  
  constructor(
    private router: Router,
    private Cookie: CookieService,
    private service: RoomService,
  ) {
    this.getEmployes();
  }

  employe: any = [];
  currentUser: any = {};
  setToken = (token: string): void => {
    this.Cookie.set('token', token, { expires: 1, sameSite: 'Lax' });
  };

  getToken = (): string | null => {
    return this.Cookie.get('token');
  };

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logOut = () => {
    if (this.Cookie.get('token')) {
      this.Cookie.delete('token');
      this.router.navigate(['admin']);
      this.clearObject(this.currentUser);
    } else {
      console.error('Auth object is not defined.');
    }
  };

  clearObject(obj: any) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        delete obj[prop];
      }
    }
  }
  getEmployes() {
    this.service.getEmployes$.subscribe({
      next: (res) => {
        if (res) {
          this.loading = false;
          this.employe = res;
          this.employeesFetched = true;
        } else {
          throw new Error('Something Wrong');
        }
      },
      error: (error) => {
        console.error('Error fetching employees:', error);
      },
    });
  }

  logIn = (email: string, password: string): void => {
    this.getEmployes();

    this.currentUser = this.employe.find((val: any) => {
      return val.email === email && val.password === password;
    });

    if (Object.keys(this.currentUser || {}).length !== 0) {
      this.setToken(`user_jkls${this.currentUser.id}}`);
      this.router.navigate(['/admin/management']);
    } else {
      alert('Faild To Login');
    }
  };
}
