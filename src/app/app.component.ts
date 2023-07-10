import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SecretDialogComponent } from './secret-dialog/secret-dialog.component';
import { planningCenterApiKey } from 'src/lib/configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'cos-dashboard';

  secretExists = planningCenterApiKey.get() !== null;

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

    dialogRef.beforeClosed().subscribe(() => {
      this.secretExists = true;
    });
  }
}
