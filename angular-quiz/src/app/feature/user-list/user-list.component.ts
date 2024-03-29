import { Component, inject } from '@angular/core';
import { User } from '../../shared/models/user';
import { PaginationComponent } from '../../shared/component/pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../core/services/user.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, PaginationComponent , MatTableModule],
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  userService = inject(UserService)
  users: User[];
  displayedColumns = ['id','avatar', 'first_name', 'last_name', 'email'];
  // dataSource = new MatTableDataSource<Element>(this.users);
  totalPages : number;
  pageNumbers: any;
  currentPage : number;
  ngOnInit() {
    this.getUsersFor();
  }
  getUsersFor(pageNumber = 1) {
    this.userService.getUsers(pageNumber)
    .subscribe((response: any) => {
      this.users = response.data;
      this.totalPages = response.total_pages;
      this.pageNumbers = Array.from({length: response.total_pages}, (_, i) => i + 1)
      this.currentPage = response.page;
    });
}
}
