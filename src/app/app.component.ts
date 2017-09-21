import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'app/common/auth/auth.service';

@Component({
  selector: 'skylark-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.less'],
  providers: [AuthService],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'app';
}
