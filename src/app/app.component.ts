import { Component } from '@angular/core';
import Configuration from '../assets/app.config.json';
import { MatDialog } from '@angular/material/dialog';
import { SecretDialogComponent } from './secret-dialog/secret-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'cos-dashboard';

  secretExists =
    localStorage.getItem(
      Configuration.planningCenter.api.auth.secretKey ??
        'planningCenter-api-secret'
    ) !== null;

  constructor(public dialog: MatDialog) {
    if (!this.secretExists) {
      this.openDialog();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(SecretDialogComponent, {
      disableClose: true,
      width: '728px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.secretExists = true;
    });
  }
}
