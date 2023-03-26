import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static required(control: AbstractControl): ValidationErrors | null {
    return control.value ? null : { required: true };
  }

  static minLength(length: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        return control.value.length >= length ? null : { minLength: true };
    }
  }
}
