import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MENU_LIST } from './shared/constants/constants';
import { CurrentUser } from './shared/interfaces/current-user.interface';
import { GlobalsService } from './shared/services/globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  hasCurrentUser: boolean = false;
  currentUserSubscription: Subscription = null;
  menuItems = MENU_LIST;

  constructor(private globals: GlobalsService) {}

  ngOnInit(): void {
    // Listen every changes
    this.currentUserSubscription = this.globals.updateCurrentUser$.subscribe((currentUser: CurrentUser) => {
      this.hasCurrentUser = !!currentUser; // To boolean
    });
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }
}
