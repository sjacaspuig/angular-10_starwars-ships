import { Injectable } from '@angular/core';

export interface CurrentUser {
  username: string,
  authdata: string
}

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
