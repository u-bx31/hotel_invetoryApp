import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent implements OnInit {
  valid : boolean = true;

  email: string = '';
  password: string = '';
  
  constructor(private router: Router,private auth : AuthService) { }
  ngOnInit(): void {
    
    if(this.auth.isLoggedIn()){
      this.router.navigate(['/admin/management'])
    }
  }

  login(loginForm : NgForm){
    if(loginForm.valid){
      this.auth.logIn(this.email,this.password).subscribe(
        (result)=>{
          this.router.navigate(['/admin/management'])
        }
        ,(err : Error) =>{
          console.log(err.message)
        }
      )
    }
    else{
      this.valid = false;
    }
  }
}
