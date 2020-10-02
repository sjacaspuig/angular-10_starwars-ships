import { Component, OnInit } from '@angular/core';
import { ShipsService } from '../services/ships.service';

@Component({
  selector: 'ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public error = undefined;
  public starships: {}[] = [];
  private lastResponse;

  constructor(private shipsService: ShipsService) { }

  ngOnInit(): void {
    this.fetchNext();
  }

  public fetchNext(): void {
    const re = /http/gi;
    const url = !this.lastResponse ? null : this.lastResponse['next'] ? this.lastResponse['next'].replace(re, 'https') : 'finished';

    if(url !== 'finished') {
      this.shipsService.getStarships(url)
      .subscribe(
        data => {
          this.starships = this.starships.concat(data.results);
          this.lastResponse = data;
        },
        error => this.error = true,
      );
    }
  }
}
