import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "https://localhost:44379/api/";

  constructor(private http: HttpClient) { }

  getDeptList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + 'Department');
  }

  addDept(val: any) {
    return this.http.post(this.APIUrl + 'Department', val);
  }

  updateDept(val: any) {
    return this.http.put(this.APIUrl + 'Department', val);
  }

  getEmpList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + 'Employee');
  }

  addEmp(val: any) {
    return this.http.post(this.APIUrl + 'Employee', val);
  }

  updateEmp(val: any) {
    return this.http.put(this.APIUrl + 'Employee', val);
  }

}
