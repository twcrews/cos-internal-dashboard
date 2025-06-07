import { Component } from '@angular/core';
import { FormControl, ValidatorFn, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { sha3_256 } from 'js-sha3';
import { hardRefresh } from '../../lib/browser';
import { authenticationUrl, planningCenterApiKey } from '../../lib/configuration';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.less'],
  imports: [
    MatFormFieldModule,
    MatProgressBarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class SplashComponent {
  secretExists = planningCenterApiKey.get() !== null  
  
  private _secretText: string = '';
  private _secretHash: () => string = () => sha3_256(this._secretText);

  get SecretAuthenticationState(): typeof SecretAuthenticationState {
    return SecretAuthenticationState;
  }

  get secret() {
    return this._secretText;
  }
  set secret(text) {
    this._secretText = text;
  }

  authenticationState = SecretAuthenticationState.Standby;
  secretFormControl = new FormControl('', [secretValidator()]);
  matcher = new SecretErrorStateMatcher();

  onValidate() {
    this.authenticationState = SecretAuthenticationState.InProgress;
    this.secretFormControl.disable();
    fetch(authenticationUrl, {
      headers: {
        "X-Functions-Key": this._secretHash()
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
        } else {
          this.save();
        }
      });
  }

  save(): void {
    planningCenterApiKey.set(this._secretHash());
    hardRefresh();
  }
}

export class SecretErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

export function secretValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return (control.value ?? '').length > 0
      ? null
      : { error: "Key can't be empty" };
  };
}

enum SecretAuthenticationState {
  Standby,
  InProgress,
  Authenticated,
  Unauthorized,
  Error,
}