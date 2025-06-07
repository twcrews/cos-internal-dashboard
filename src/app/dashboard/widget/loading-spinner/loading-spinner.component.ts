import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.less'],
  imports: [
    MatProgressSpinnerModule
  ]
})
export class LoadingSpinnerComponent {

}
