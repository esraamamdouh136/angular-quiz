import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {

  @Input() totalPages : number;
  @Input() pageNumbers: any;
  @Input() currentPage : number;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  getUsersFor(selectedPageNumber : number) {
    this.pageChanged.emit(selectedPageNumber);
  }
}
