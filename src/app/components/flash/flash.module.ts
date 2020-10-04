import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashComponent } from './flash.component';



@NgModule({
  declarations: [ FlashComponent ],
  imports: [ CommonModule ],
  exports: [ FlashModule ]
})
export class FlashModule { }
