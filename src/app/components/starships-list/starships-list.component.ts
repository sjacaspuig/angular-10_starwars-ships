import { Component, Input, OnInit } from '@angular/core';
import { Starships } from 'src/app/shared/interfaces/starships.interface';

@Component({
  selector: 'starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {

  @Input() starships: Starships;

  constructor() { }

  ngOnInit(): void {
  }

}
