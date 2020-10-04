import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Flash {
  message?: string;
  type?: string;
  keepAfterLocationChange?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FlashService {

  private flash: Flash = null;
  private updateSource = new Subject<Flash>();
  public update$ = this.updateSource.asObservable();

  constructor() {
    this.clearFlashMessage();
  }

  public clearFlashMessage(): void {
    if (this.flash) {
      if (!this.flash.keepAfterLocationChange) {
          this.flash = null;
      } else {
          // only keep for a single location change
          this.flash.keepAfterLocationChange = false;
      }
    }
    this.updateFlash();
  }

  public success(message: string, keepAfterLocationChange: boolean = true): void {
    this.setFlashData(message, 'success', keepAfterLocationChange);
    this.updateFlash();
  }

  public error(message: string, keepAfterLocationChange: boolean = true): void {
    this.setFlashData(message, 'error', keepAfterLocationChange);
    this.updateFlash();
  }

  private setFlashData(message: string, type: string, keepAfterLocationChange?: boolean) {
    this.flash = {};
    this.flash.message = message;
    this.flash.type = type;
    this.flash.keepAfterLocationChange = keepAfterLocationChange;
  }

  private updateFlash(): void {
    this.updateSource.next(this.flash);
  }
}
