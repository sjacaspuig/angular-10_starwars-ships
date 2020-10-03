import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  public getFilmByUrl(url): Observable<any> {
    return this.http.get(url, {headers: {'Authorization': 'none'}});
  }
}
