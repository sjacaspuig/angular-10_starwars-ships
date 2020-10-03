import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  constructor(private http: HttpClient) { }

  public getPilotByUrl(url): Observable<any> {      
    return this.http.get(url, {headers: {'Authorization': 'none'}});      
  }
}
