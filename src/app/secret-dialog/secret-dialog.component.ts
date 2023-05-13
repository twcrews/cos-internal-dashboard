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

@Component({
  selector: 'app-secret-dialog',
  templateUrl: './secret-dialog.component.html',
  styleUrls: ['./secret-dialog.component.less'],
})
export class SecretDialogComponent {
  get SecretAuthenticationState(): typeof SecretAuthenticationState {
    return SecretAuthenticationState;
  }

  secretFormControl = new FormControl('', [secretValidator()]);
  authenticationState = SecretAuthenticationState.InProgress;

  matcher = new SecretErrorStateMatcher();

  onSubmit(): void {
    alert('Thanks!');
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
    const validationError: ValidationErrors = {
      error: 'something',
    };
    console.log(validationError['error']);
    return validFormat && validLength
      ? null
      : validLength
      ? { error: 'Secret must be in hexidecimal format' }
      : { error: 'Secret must be 64 characters' };
  };
}

enum SecretAuthenticationState {
  InProgress,
  Authenticated,
  Unauthorized,
  Error,
}
