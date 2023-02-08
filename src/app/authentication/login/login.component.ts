import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm!:FormGroup
  validu!: any;
  ActiveYn?:false

  constructor(private authService:AuthServiceService,private cookieService:CookieService,private routerService:Router) { }

  ngOnInit(): void {
    this.createaddForm()
  }
  createaddForm(){
    this.LoginForm=new FormGroup({
      username:new FormControl(),
      password :new FormControl()
    }
    )}

    validUser(){
      const obj=this.fetchLoginForm()
      this.authService.addLoginForm(obj).subscribe((value:any)=>{
        this.validu=value.valid
        console.log(this.validu)
        if(this.validu){
          this.cookieService.set("username",value.UserName),
          this.cookieService.set("fullname",value.FullName),
          this.cookieService.set("userID",value.UserID),
          this.cookieService.set("token",value.token),
          this.cookieService.set("ActiveYn","true")
          this.routerService.navigate(["home"])
        }
        else{
          // this.toastService.show({textOrTpl:'invalid username',className:'bg-danger',delay:2000})
          console.log("not sone")
        }
      })
    }

  
  fetchLoginForm():any{
    const obj={
      username:this.LoginForm.get('username')?.value,
      password:this.LoginForm.get('password')?.value,
    }
    console.log(obj)
    return obj;
  }
  OnSubmit(){
    this.validUser()
  }


}
