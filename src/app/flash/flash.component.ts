import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { Flash, FlashService } from '../shared/services/flash.service';


@Component({
  selector: 'flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.scss']
})
export class FlashComponent implements OnInit, OnDestroy {

  @Output() update = new EventEmitter<void>();
  flash: Flash;
  updateSubscription: Subscription = null;

  constructor(private flashService: FlashService) { }
  
  ngOnInit(): void {
    this.updateSubscription = this.flashService.update$.subscribe((flash: Flash) => {
      this.flash = flash;
    });
  }

  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }

}
