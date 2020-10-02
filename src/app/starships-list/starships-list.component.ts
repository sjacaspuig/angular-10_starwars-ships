import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {

  @Input() starships: [] = [];
  @Output() onFetchNextPage;

  constructor() { }

  ngOnInit(): void {
  }

  // fetchNextPage = function () {
  //   this.onFetchNextPage();
  // }

}
