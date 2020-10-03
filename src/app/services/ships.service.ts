import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor(private http: HttpClient) { }

  public getStarshipsByUrl(url): Observable<any> {      
    if (!url) {
        url  ='https://swapi.dev/api/starships/'
    }

    return this.http.get(url, {headers: {'Authorization': 'none'}});      
  }
}
