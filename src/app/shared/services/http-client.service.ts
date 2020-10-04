import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CacheService } from './cache.service';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpOptions } from '../interfaces/httpOptions.interface';
import { Rest } from '../enums/rest.enum';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private http: HttpClient,
    private cacheService: CacheService
  ) { }

  get<T>(options: HttpOptions): Observable<T> {
    return this.httpCall(Rest.GET, options);
  }

  delete<T>(options: HttpOptions): Observable<T> {
    return this.httpCall(Rest.DELETE, options);
  }

  post<T>(options: HttpOptions): Observable<T> {
    return this.httpCall(Rest.POST, options);
  }

  put<T>(options: HttpOptions): Observable<T> {
    return this.httpCall(Rest.PUT, options);
  }

  private httpCall<T>(rest: Rest, options: HttpOptions): Observable<T> {

    // Setup default values
    options.body = options.body || null;
    options.cacheMins = options.cacheMins || 0;

    if (options.cacheMins > 0) {
      // Get data from cache
      const data = this.cacheService.load(options.url);
      // Return data from cache
      if (data !== null) {
          return of<T>(data);
      }
    }

    return this.http.request<T>(rest, options.url, {body: options.body})
      .pipe(
        switchMap(response => {
          // No cache time, no save data
          if (options.cacheMins > 0) {
            // Data will be cached
            this.cacheService.save({
                key: options.url,
                data: response,
                expirationMins: options.cacheMins
            });
          }
          return of<T>(response);
        })
      );
  }
}
