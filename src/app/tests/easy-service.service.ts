import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationConstants } from '../shared/constants/ApplicationConstants';

@Injectable({
  providedIn: 'root'
})
export class EasyServiceService {

  constructor(private httpClient:HttpClient) { }

  fetchLogicalques(): Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.APIURL}/ques`);
  }
  fetchCategory():Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.APIURL}/cat`);
  }
  addResult(object:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/addresult`,object)
  }
}
