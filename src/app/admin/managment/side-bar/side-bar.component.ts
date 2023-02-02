import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../login/services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  role !: string ;
  userName !: string ;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver,private auth : AuthService) {}
  ngOnInit(): void {

    console.log();
    if(Object.keys(this.auth.employe1 || {}).length !== 0 ){
      const {firstName,lastName,role} = this.auth.employe1;
      this.role = role;
      console.log(this.role);
      this.userName = `${firstName}`
    }
    else{
      console.log("login First");
    }

  }


  logout(){
    this.auth.logOut();
  }
}
