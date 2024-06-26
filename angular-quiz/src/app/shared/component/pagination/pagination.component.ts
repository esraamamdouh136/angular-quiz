import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  @Input() totalPages: number;
  @Input() pageNumbers: number[];
  @Input() currentPage: number;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  getUsersFor(selectedPageNumber: number) {
    if (selectedPageNumber <= this.totalPages) {
      this.pageChanged.emit(selectedPageNumber);
    }
  }
}
