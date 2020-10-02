import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {

  @Input() starship;
  starshipUrl: string;;

  constructor() { }

  ngOnInit(): void {
    this.getStarshipId();
  }

  private getStarshipId(): void {
    const url = this.starship['url'];
    const shipId = url.split("/").filter(item => item !== "").slice(-1)[0];
    this.starshipUrl = 'https://starwars-visualguide.com/assets/img/starships/' + shipId + '.jpg';
  }

}
