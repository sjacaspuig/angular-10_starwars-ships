import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor(private http: HttpClient) { }

  public getStarshipById(id): Observable<any> {      
    const url  ='https://swapi.dev/api/starships/' + id + '/';
    return this.http.get(url, {headers: {'Authorization': 'none'}});      
  }
}
