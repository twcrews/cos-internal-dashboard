import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-secret-dialog',
  templateUrl: './secret-dialog.component.html',
  styleUrls: ['./secret-dialog.component.less'],
})
export class SecretDialogComponent {
  secretDialog = this.fb.group({
    secret: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
