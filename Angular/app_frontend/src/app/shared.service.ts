import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";
  constructor(private http:HttpClient) { }

  addRecruiter(val:any){
    return this.http.post(this.APIUrl + '/recruiter/', val);
  }
}
