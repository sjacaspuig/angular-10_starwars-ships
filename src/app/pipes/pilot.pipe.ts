import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { PilotService } from '../services/pilot.service';

@Pipe({
  name: 'pilot'
})
export class PilotPipe implements PipeTransform {

  private re = /http/gi;

  constructor(private pilotService: PilotService) {}

  transform(pilotUrl: string, arg: string): Observable<string> {
    const url = pilotUrl.replace(this.re, 'https');
    
    return new Observable(observer => {
      this.pilotService.getPilotByUrl(url)
      .subscribe( 
        data => {
          observer.next(data[arg])
          observer.complete();
        },
        error => {
          observer.next('No se ha podido encontrar el piloto'),
          observer.complete();
        }
      )
    })
  }

}
