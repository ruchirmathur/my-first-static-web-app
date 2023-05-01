import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRequest } from './request';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {}
  searchMember() {
    const request: IRequest = {};
         request.member_user_name = "david101";
         return this.http.post("https://appservicemanagement.azure-api.net/api/searchMember/api/searchMember",request);
     }
 
}
