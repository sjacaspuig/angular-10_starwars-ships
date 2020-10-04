import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TIME_CACHE } from '../constants/constants';
import { Starships } from '../interfaces/starships.interface';
import { Starship } from '../interfaces/straship.interface';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  private url = 'https://swapi.dev/api/starships/';

  constructor(private http: HttpClientService) { }

  public getAllStarshipsByUrl(url: string): Observable<Starships> {
    if (!url) {
        url  = this.url;
    }

    return this.http.get<Starships>({
      url: url,
      body: {headers: {'Authorization': 'none'}},
      cacheMins: TIME_CACHE
    });
  }

  public getStarshipById(id: string): Observable<Starship> {
    const url  = this.url + id + '/';

    return this.http.get<Starship>({
      url: url,
      body: {headers: {'Authorization': 'none'}},
      cacheMins: TIME_CACHE
    });
  }
}
