import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from '../Model/emplyeeModle';

@Injectable({
  providedIn: 'root',
})
export class Employee {

  url = environment.baseUrl;

   constructor(private http: HttpClient) {}

  getAllEmplyeeDetails():Observable<EmployeeModel[]>{
    return this.http.get<EmployeeModel[]>(`${this.url}/Employee`)
  }
}
