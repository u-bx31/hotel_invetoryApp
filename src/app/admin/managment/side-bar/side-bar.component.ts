import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, firstValueFrom } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../login/services/auth.service';
import { RoomService } from '../rooms/service/room.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  role!: string;
  userName!: string;
  userData: any = {};
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  constructor(
    private breakpointObserver: BreakpointObserver,
    private auth: AuthService,
    private userService: RoomService,
    private Cookie: CookieService
  ) {}
  async ngOnInit(): Promise<void> {
    try {
      let token = this.Cookie.get('token');
      const regex = /user_jkls(\d+)/;
      const match = regex.exec(token) || '';
      const Data = this.userService.getCurrentEmployee(match[1]);
      const userData = await firstValueFrom(Data);
      if (Object.keys(userData || {}).length !== 0) {
        const { firstName, lastName, role } = userData;
        this.role = role;
        console.log(this.role);
        this.userName = `${firstName}`;
      } else {
        console.log('Login First');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  logout() {
    this.auth.logOut();
  }
}
