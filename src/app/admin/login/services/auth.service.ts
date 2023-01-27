import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router,private Cookie:CookieService) { }

  setToken = (token : string) : void=>{
    this.Cookie.set('token',token,{ expires: 1, sameSite: 'Lax' })
  }


  getToken = (): string | null => {
    return this.Cookie.get('token')
  }

  isLoggedIn = () : any => {
    return this.getToken()!= "";
  }

  logOut = () =>{
    this.Cookie.delete('token')
    this.router.navigate(['admin'])
  }
  logIn = (email : string ,password : string) : Observable<any> =>{
    if(email==="admin@gmail.com" && password ==='admin321'){
      console.log(this.getToken());
      this.setToken('dgdkjfhgjdhgadmingfdjsfhdf')
      return of([])
    }
    else{
      return throwError(new Error('Faild to Login'))
    }
  }

}
