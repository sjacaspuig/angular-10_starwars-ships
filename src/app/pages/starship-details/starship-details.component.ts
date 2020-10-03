import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Subscription } from 'rxjs';
import { StarshipService } from '../../shared/services/starship.service';

@Component({
  selector: 'starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.scss']
})
export class StarshipDetailsComponent implements OnInit, OnDestroy {

  starship;
  error;
  starshipImgUrl;
  starshipSubscription: Subscription = null;

  constructor(
    private route: ActivatedRoute,
    private starshipService: StarshipService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.fetchStarshipDetails();
    this.setIdToImgUrl();
  }

  ngOnDestroy(): void {
    this.starshipSubscription.unsubscribe();
  }

  private fetchStarshipDetails(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    this.starshipSubscription = this.starshipService.getStarshipById(id)
    .subscribe(
      data => this.starship = data,
      error => this.error = true,
    );
  }

  private setIdToImgUrl(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    this.starshipImgUrl = 'https://starwars-visualguide.com/assets/img/starships/' + id + '.jpg';
  }

  public goToBack() {
    this.location.back();
  }

}
