import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  private url: string = 'https://swapi.dev/api/starships/';

  constructor(private http: HttpClient) { }

  public getStarshipsByUrl(url: string): Observable<any> {      
    if (!url) {
        url  = this.url;
    }

    return this.getStraships(url);      
  }

  public getStarshipById(id: string): Observable<any> {      
    const url  = this.url + id + '/';

    return this.getStraships(url);        
  }

  private getStraships(url: string): Observable<any> {
    return this.http.get(url, {headers: {'Authorization': 'none'}}); 
  }
}
