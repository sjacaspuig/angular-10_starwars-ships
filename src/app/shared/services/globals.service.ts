import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CurrentUser } from '../interfaces/current-user.interface';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  private currentUser: CurrentUser;
  private updateCurrentUserSource = new Subject<CurrentUser>();
  public updateCurrentUser$ = this.updateCurrentUserSource.asObservable();

  constructor() { }

  public getCurrentUser(): CurrentUser {
    return this.currentUser;
  }

  public setCurrentUser(currrentUser: CurrentUser): void {
    this.currentUser = currrentUser;
    this.updateCurrentUser(currrentUser);
  }

  private updateCurrentUser(currentUser: CurrentUser) {
    this.updateCurrentUserSource.next(currentUser);
  }
}
