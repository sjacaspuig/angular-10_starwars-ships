import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Starship } from 'src/app/shared/interfaces/straship.interface';

@Component({
  selector: 'starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {

  @Input() starship: Starship;
  starshipImgUrl: string;
  starshipId: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.starshipId = this.getStarshipId();
    this.starshipImgUrl = 'https://starwars-visualguide.com/assets/img/starships/' + this.starshipId + '.jpg';
  }

  private getStarshipId(): string {
    const url = this.starship['url'];
    return url.split("/").filter(item => item !== "").slice(-1)[0];
  }

  public goToDetails() {
    this.router.navigate(['/starship-details'], {queryParams: {id: this.starshipId}})
  }

  public imgErrorHandler() {
    this.starshipImgUrl = '../../assets/images/phantom.jpg';
  }

}
