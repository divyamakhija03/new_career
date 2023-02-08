import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup
  ValidUsername: any;
  validUsername: any;
  toastService: any;

  constructor(private authService:AuthServiceService) { }

  ngOnInit(): void {
    this.createaddForm()
  }
  createaddForm(){

    this.registerForm=new FormGroup({
      name:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      username:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      confirm:new FormControl('',Validators.required),
      phone:new FormControl('',Validators.required),
      bio:new FormControl('',Validators.required),
      std:new FormControl('',Validators.required)
    }
    )
  }
  SubmitForm(){
    this.ValidateUsername();
    this.validatePassword()
  }
  ValidateUsername(){
    const username=this.registerForm.get('username')?.value
    this.authService.ValidateUser(username).subscribe((value:any)=>{
      // console.log(value)
      this.validUsername=value.validUsername
      if(this.validUsername){
        const obj=this.fetchRegisterForm()
        this.authService.addRegisterForm(obj).subscribe(()=>console.log("done"))
      }
      else{
        console.log("errror")
        this.toastService.show({textOrTpl:'invalid username',className:'bg-danger',delay:2000})
      }
      });
    }

    validatePassword(){
     const password=this.registerForm.get('password')?.value
     const confirm=this.registerForm.get('confirm')?.value
     console.log(confirm)
     console.log(password)
      if(!password==confirm){
        this.toastService.show({textOrTpl:'password not matched',className:'bg-danger',delay:20000})
        console.log("incorrect")
      }
    }

    fetchRegisterForm():any{
      const obj={
        firstName:this.registerForm.get('name')?.value,
        lastName:this.registerForm.get('lastname')?.value,
        userName:this.registerForm.get('username')?.value,
        email:this.registerForm.get('email')?.value,
        password:this.registerForm.get('password')?.value,
        Mobile:this.registerForm.get('phone')?.value,
        Bio:this.registerForm.get('bio')?.value,
        std:this.registerForm.get('std')?.value,
        RoleID:2
      }
      console.log(obj)
      return obj;
    }
}
