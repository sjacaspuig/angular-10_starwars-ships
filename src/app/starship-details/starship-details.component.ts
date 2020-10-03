import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Subscription } from 'rxjs';
import { StarshipService } from '../services/starship.service';

@Component({
  selector: 'starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.scss']
})
export class StarshipDetailsComponent implements OnInit, OnDestroy {

  starship;
  error;
  starshipSubscription: Subscription = null;

  constructor(
    private route: ActivatedRoute,
    private starshipService: StarshipService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.fetchNext();
  }

  ngOnDestroy(): void {
    this.starshipSubscription.unsubscribe();
  }

  public fetchNext(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    this.starshipSubscription = this.starshipService.getStarship(id)
    .subscribe(
      data => this.starship = data,
      error => this.error = true,
    );
  }

  public goToBack() {
    this.location.back();
  }

}
