import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FilmService } from '../shared/services/film.service';

@Pipe({
  name: 'film'
})
export class FilmPipe implements PipeTransform, OnDestroy {

  private re = /http/gi;
  private filmSubscription: Subscription = null;

  constructor(private filmService: FilmService) {}

  ngOnDestroy() {
    this.filmSubscription.unsubscribe();
  }

  transform(filmUrl: string, arg: string): Observable<string> {
    const url = filmUrl.replace(this.re, 'https');
    
    return new Observable(observer => {
      this.filmSubscription = this.filmService.getFilmByUrl(url)
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
