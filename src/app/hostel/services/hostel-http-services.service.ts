import { environment } from './../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HostelSetup } from '../models/hostel.model';

@Injectable({
  providedIn: 'root',
})
export class HostelHttpServicesService {
  constructor(private client: HttpClient) {}

  getAllHostel(): Observable<HostelSetup[]> {
    return this.client.get<HostelSetup[]>(
      environment.baseUrlHostelService + '/api/Hostel'
    );
  }
}
