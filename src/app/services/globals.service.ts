import { Injectable } from '@angular/core';
import { CurrentUser } from '../interfaces/current-user.interface';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  private currentUser: CurrentUser;

  constructor() { }

  public getCurrentUser(): CurrentUser {
    return this.currentUser;
  }

  public setCurrentUser(currrentUser): void {
    this.currentUser = currrentUser;
  }
}
