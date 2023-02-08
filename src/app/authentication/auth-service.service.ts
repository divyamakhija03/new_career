import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { ApplicationConstants } from '../shared/constants/ApplicationConstants';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient:HttpClient,private cookieService:CookieService) { }

  addRegisterForm(object:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/registerUser`,object)
  }

  ValidateUser(username:String):Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.APIURL}/registerUser/${username}`)
  }

  addLoginForm(object:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/LoginUser`,object)
  }

  fetchProfile(userid :Number):Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.APIURL}/profile/${userid}`)
  }
}
