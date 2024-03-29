import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './feature/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/component/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , UserListComponent, HttpClientModule, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-quiz';
}
