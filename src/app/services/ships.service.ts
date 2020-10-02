import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor(private http: HttpClient) { }

  GetStarships(url): Observable<any> {      
    if (!url) {
        url  ='https://swapi.co/api/starships/'
    }

    return this.http.get(url, {
        headers: {
            'Authorization': 'none'        
        }
    });      
  }
}
