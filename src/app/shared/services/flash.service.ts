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

  public clearFlashMessage(): void {;
    if(this.flash) {
        if(!this.flash.keepAfterLocationChange) {
            this.flash = null;
        } else {
            // only keep for a single location change
            this.flash.keepAfterLocationChange = false
        }
    }
  }

  public success(message: string, keepAfterLocationChange?: boolean): void {
    this.flash = {
      message: message,
      type: 'success',
      keepAfterLocationChange: keepAfterLocationChange
    };
    this.updateFlash();
  }

  public error(message: string, keepAfterLocationChange?: boolean): void {
    this.flash = {
      message: message,
      type: 'error',
      keepAfterLocationChange: keepAfterLocationChange
    };
    this.updateFlash();
  }

  private updateFlash() {
    this.updateSource.next(this.flash);
  }
}
