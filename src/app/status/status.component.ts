import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.less'],
})
export class StatusComponent {
  @Input() text: string = 'Test';
  @Input() backgroundColor: BackgroundColor = BackgroundColor.Success;
}

export enum BackgroundColor {
  None = 'none',
  Error = 'error',
  Risk = 'risk',
  Warning = 'warning',
  Info = 'info',
  Success = 'success',
}
