import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { profile } from 'src/app/shared/interfaces/ques.interface';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userID!: any;
  value: any;

  constructor(private authService:AuthServiceService,private cookieService:CookieService) { }

  ngOnInit(): void {
    this.fetchProfile()
  }
  fetchProfile() {
    this.userID=Number(this.cookieService.get(`userID`))
    console.log(this.userID)
    this.authService.fetchProfile(this.userID).subscribe((data:profile[])=>{
      this.value=data
      console.log(this.value)
      
    })
  }



}
