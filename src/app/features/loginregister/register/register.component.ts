import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  registerUserFormGroup?: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}


  ngOnInit(): void {
    this.registerUserFormGroup = this.formBuilder.group(
      {
        'firstname': ['', [Validators.required]],
        'lastname': ['', [Validators.required]],
        'username': ['', [Validators.required]],
        'email': ['', [Validators.required]],
        'password': ['', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
        ]],
        'confirmPassword': ['', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30)
        ]],
      },
      {validator: this.checkPasswords}
    );
  }

  /**
   * This is to check if passwords are same or not
   * @param group
   * @returns
   */
  checkPasswords(group: FormGroup) {
    const pass = group.controls['password'].value;
    const confirmPassword = group.controls['confirmPassword'].value;

    return pass === confirmPassword
      ? null
      : group.controls['confirmPassword'].setErrors({notSame: true})
    ;
  }

}
