import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const reTypePasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password');
    const rePassword = control.get('rePassword');
    return password.value !== rePassword.value ? { 'notPassword': true } : null;
  };