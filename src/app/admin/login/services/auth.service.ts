import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router) { }

  setToken = (token : string) : void=>{
    localStorage.setItem('token' , token)
  }


  getToken = (): string | null => {
    return localStorage.getItem('token')
  }

  isLoggedIn = () : boolean => {
    return this.getToken() != null
  }

  logOut = () =>{
    localStorage.removeItem('token');
    this.router.navigate(['admin'])
  }
  logIn = (email : string ,password : string) : Observable<any> =>{
    if(email==="admin@gmail.com" && password ==='admin321'){
      this.setToken('dgdkjfhgjdhgadmingfdjsfhdf')
      return of([])
    }
    else{
      return throwError(new Error('Faild to Login'))
    }
  }

}
