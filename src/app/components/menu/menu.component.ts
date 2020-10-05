import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/interfaces/menu.interface';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menuItems: Menu[];

  constructor() {}

  ngOnInit(): void {
  }

  public isActive(item: Menu): void {
    this.menuItems = this.menuItems.map((item: Menu) => {
      item.active = false;
      return item;
    });

    item.active = true;
  }

}
