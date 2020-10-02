import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  error = undefined;
  lastResponse = {};
  starships = [];

  constructor() { }

  ngOnInit(): void {
  }

  fetchNext()  {
      var url = this.lastResponse ? this.lastResponse['next'] : null;

      // ShipsService.GetStarships(url)
      // .then(function (data) {
      //     this.starships = this.starships.concat(data.results);
      //     this.lastResponse = data;
      //     $scope.$digest;
      // })
      // .catch(function () {
      //     this.error = true;
      //     $scope.$digest();
      // })
  }   
}
