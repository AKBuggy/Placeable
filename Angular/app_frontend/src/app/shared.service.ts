import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";
  constructor(private http:HttpClient) { }

  addStudent(val:any){
    return this.http.post(this.APIUrl + '/student/', val);
  }

  addRecruiter(val:any){
    return this.http.post(this.APIUrl + '/placement/', val);
  }

  login(val:any){
    return this.http.post(this.APIUrl + '/login/', val);
  }

}
