import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APIModel } from '../Model/dashboard';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  url = environment.baseUrl;

   constructor(private http: HttpClient) {}

    getAllApi():Observable<APIModel[]>{
    return this.http.get<APIModel[]>(`${this.url}/Apis`)
  }
}
