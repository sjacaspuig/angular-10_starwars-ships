import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TIME_CACHE } from '../constants/constants';
import { Pilot } from '../interfaces/pilot.interface';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  constructor(private http: HttpClientService) { }

  public getPilotByUrl(url): Observable<Pilot> {
    return this.http.get<Pilot>({url: url, body: {headers: {'Authorization': 'none'}}, cacheMins: TIME_CACHE});
  }
}
