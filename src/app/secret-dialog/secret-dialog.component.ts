import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroupDirective,
  NgForm,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import Configuration from '../../assets/app.config.json';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-secret-dialog',
  templateUrl: './secret-dialog.component.html',
  styleUrls: ['./secret-dialog.component.less'],
})
export class SecretDialogComponent {
  private _secretText: string = '';

  get SecretAuthenticationState(): typeof SecretAuthenticationState {
    return SecretAuthenticationState;
  }

  get secret() {
    return this._secretText;
  }
  set secret(text) {
    this._secretText = text;
    if (validSecret(text)) {
      this.authenticate();
    }
  }

  constructor(public dialogRef: MatDialogRef<SecretDialogComponent>) {}

  authenticate() {
    this.authenticationState = SecretAuthenticationState.InProgress;
    this.secretFormControl.disable();
    fetch('/people/v2', {
      credentials: 'include',
      headers: {
        authorization: `Basic ${window.btoa(
          `${Configuration.planningCenter.api.auth.appId}:${this._secretText}`
        )}`,
        'X-Requested-With': 'XMLHttpRequest',
      },
    })
      .then((response) => {
        this.authenticationState = response.ok
          ? SecretAuthenticationState.Authenticated
          : response.status === 401
          ? SecretAuthenticationState.Unauthorized
          : SecretAuthenticationState.Error;
      })
      .catch(() => {
        this.authenticationState = SecretAuthenticationState.Error;
      })
      .finally(() => {
        if (
          this.authenticationState !== SecretAuthenticationState.Authenticated
        ) {
          this.secretFormControl.enable();
        }
      });
  }

  secretFormControl = new FormControl('', [secretValidator()]);
  authenticationState = SecretAuthenticationState.InProgress;

  matcher = new SecretErrorStateMatcher();

  onSave(): void {
    localStorage.setItem(
      Configuration.planningCenter.api.auth.secretKey,
      this._secretText.toLowerCase()
    );
    this.dialogRef.close();
  }
}

export class SecretErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

export function secretValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const validLength = (control.value ?? '').length == 64;
    const validFormat = /[a-fA-F0-9]{64}/.test(control.value);
    return validFormat && validLength
      ? null
      : validLength
      ? { error: 'Secret must be in hexidecimal format' }
      : { error: 'Secret must be 64 characters' };
  };
}

const validSecret = (text: string) =>
  text.length == 64 && /[a-fA-F0-9]{64}/.test(text);

enum SecretAuthenticationState {
  InProgress,
  Authenticated,
  Unauthorized,
  Error,
}
