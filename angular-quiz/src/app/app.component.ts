import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserListComponent } from './feature/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './feature/user-details/user-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    UserDetailsComponent,
    UserListComponent,
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-quiz';
}
