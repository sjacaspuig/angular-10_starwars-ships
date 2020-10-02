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
    const shipId = this.getStarshipId();
    this.starshipUrl = 'https://starwars-visualguide.com/assets/img/starships/' + shipId + '.jpg';
  }

  private getStarshipId(): string {
    const url = this.starship['url'];
    return url.split("/").filter(item => item !== "").slice(-1)[0];
  }

}
