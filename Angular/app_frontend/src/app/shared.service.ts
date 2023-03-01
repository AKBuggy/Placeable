import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  addJobPost(val:any){
    return this.http.post(this.APIUrl + '/JobPost/', val);
  }

  getJobPosts():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/GetJobPosts/');
  }
  addRecruiterDetails(val:any){
    return this.http.post(this.APIUrl + '/placementOfficerHome/', val);
  }
  getRecruitersList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/placementOfficerHome/')
  }
  updateRecruiter(val:any){
    return this.http.put(this.APIUrl + '/placementOfficerHome/',val);
  }
  deleteRecruiter(val:any){
    return this.http.delete(this.APIUrl + '/placementOfficerHome/',val);
  }
  getStudentsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/studentHome/details');
  }
  deleteStudent(val:any){
    return this.http.delete(this.APIUrl + '/studentHome/details',val);
  }
}
