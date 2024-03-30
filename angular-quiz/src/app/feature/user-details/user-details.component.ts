import { Component, inject } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from '../../shared/component/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule , LoadingSpinnerComponent],
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent {
  userService = inject(UserService);
  route = inject(ActivatedRoute);
  isLoading : boolean = false;
  userInfo$: Observable<any>;
  destroy$ = new Subject<void>();
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.getUserDetails(id);
  }
  getUserDetails(id: string) {
    this.isLoading = true;
    this.userInfo$ = this.userService.getUserById(id).pipe(
      takeUntil(this.destroy$),
      map((res) => {
        this.isLoading = false;
        return res;
      })
    );
  }
  ngOnDestroy() {
    this.destroy$.complete();
    this.destroy$.next();
  }
}
