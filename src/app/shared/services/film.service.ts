import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TIME_CACHE } from '../constants/constants';
import { Film } from '../interfaces/film.interface';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClientService) { }

  public getFilmByUrl(url): Observable<Film> {
    return this.http.get<Film>({url: url, body: {headers: {'Authorization': 'none'}}, cacheMins: TIME_CACHE});
  }
}
