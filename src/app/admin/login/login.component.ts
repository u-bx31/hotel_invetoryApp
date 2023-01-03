import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  valid : boolean = true;

  email: string = '';
  password: string = '';
  
  constructor(private router: Router) { }

  login(loginForm : NgForm){
    if(loginForm.valid){
      if(this.email==="admin@gmail.com" && this.password ==='admin321'){
        this.router.navigate(['/admin/management'])
      }
      else{
        alert('error')
      }
    }
    else{
      this.valid = false;
    }
  }
}
