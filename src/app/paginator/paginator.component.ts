import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() nextPage: string = null;
  @Input() previousPage: string = null;
  @Output() onFetchNextPage = new EventEmitter<void>();
  @Output() onFetchPreviousPage = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public fetchPreviousPage(): void {
    this.onFetchPreviousPage.emit();
  }

  public fetchNextPage(): void {
    this.onFetchNextPage.emit();
  }

}
