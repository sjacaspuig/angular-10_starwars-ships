import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmService } from '../services/film.service';

@Pipe({
  name: 'film'
})
export class FilmPipe implements PipeTransform {

  private re = /http/gi;

  constructor(private filmService: FilmService) {}

  transform(filmUrl: string, arg: string): Observable<string> {
    const url = filmUrl.replace(this.re, 'https');
    
    return new Observable(observer => {
      this.filmService.getFilmByUrl(url)
      .subscribe( 
        data => {
          observer.next(data[arg])
          observer.complete();
        },
        error => {
          observer.next('No se ha podido encontrar el nombre de la película'),
          observer.complete();
        }
      )
    })
  }

}
