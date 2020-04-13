import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Institute } from '../models/institute.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstituteHttpService {

  constructor(
    private http: HttpClient
  ) { }

  addNewInstitute(data: Institute): Observable<Institute> {
    return this.http.post<Institute>(environment.baseUrl + 'api/Institute', data);
  }

  updateInstitute(data: Institute): Observable<Institute> {
    return this.http.put<Institute>(environment.baseUrl + 'api/Institute', data);
  }
  selectInstitute(): Observable<Institute> {
    return this.http.get<Institute>(environment.baseUrl + 'api/Institute');
  }

}
