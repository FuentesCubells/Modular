import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Housing } from '../models/housing.model';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  private baseURL = "/api/v1/housing";

  constructor( private http: HttpClient ) {}

  getHousingList(): Observable<Housing[]>{
      return this.http.get<Housing[]>(this.baseURL)
  }

  getHousingById( id: string ):Observable<Housing>{
      const url = this.baseURL + `/${parseInt(id)}`;
      return this.http.get<Housing>(url)
  }
}
