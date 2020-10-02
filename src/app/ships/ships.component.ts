import { Component, OnInit } from '@angular/core';
import { ShipsService } from '../services/ships.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  error = undefined;
  lastResponse = {};
  starships = [];

  constructor(private shipsService: ShipsService) { }

  ngOnInit(): void {
  }

  fetchNext()  {
    var url = this.lastResponse ? this.lastResponse['next'] : null;

    this.shipsService.GetStarships(url)
    .subscribe(data => {
      if(data['error']) { // Mira condicional mes endevant
        this.error = true;
      } else {
        this.starships = this.starships.concat(data.results);
        this.lastResponse = data;
      }
    }); 
  }
}
