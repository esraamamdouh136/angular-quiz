import { Component, inject } from '@angular/core';
import { User, UserInfo } from '../../shared/models/user';
import { PaginationComponent } from '../../shared/component/pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../core/services/user.service';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../shared/pipe/search.pipe';
import { Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LoadingSpinnerComponent } from '../../shared/component/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    PaginationComponent,
    MatTableModule,
    FormsModule,
    RouterModule,
    LoadingSpinnerComponent
  ],
  templateUrl: './user-list.component.html',
  providers: [SearchPipe],
})
export class UserListComponent {
  userService = inject(UserService);
  searchPipe = inject(SearchPipe);
  route = inject(Router);
  destroy$ = new Subject<void>();
  users: UserInfo[];
  displayedColumns = ['id', 'avatar', 'first_name', 'last_name', 'email'];
  totalPages: number;
  searchText: string = '';
  pageNumbers: number[];
  currentPage: number;
  isLoading : boolean = false;
  ngOnInit() {
    this.getUsersFor();
  }
  getUsersFor(pageNumber = 1) {
    this.isLoading = true;
    this.userService
      .getUsers(pageNumber)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: any) => {
        this.isLoading = false;
        this.users = response.data;
        this.totalPages = response.total_pages;
        this.pageNumbers = Array.from(
          { length: response.total_pages },
          (_, i) => i + 1
        );
        this.currentPage = response.page;
      });
  }
  searchByWord() {
    if (this.searchText) {
      this.users = this.searchPipe.transform(this.users, this.searchText);
    } else {
      this.getUsersFor();
    }
  }
  rowClick(id: number) {
    this.route.navigateByUrl(`/details/${id}`);
  }
  ngOnDestroy() {
    this.destroy$.complete();
    this.destroy$.next();
  }
}
