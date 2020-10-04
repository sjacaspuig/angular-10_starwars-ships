import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsListComponent } from './starships-list.component';



@NgModule({
  declarations: [ StarshipsListComponent ],
  imports: [ CommonModule ],
  exports: [ StarshipsListComponent ]
})
export class StarshipsListModule { }
