import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) {}

  registerUserFormGroup = this.formBuilder.group({});

  ngOnInit(): void {
    this.registerUserFormGroup = this.formBuilder.group(
      {
        'firstname': ['', [Validators.required]],
        'lastname': ['', [Validators.required]],
        'username': ['',
          [
            Validators.required,
            Validators.email
          ]
        ],
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

  /**
   * Register new user
   */
  registerUser() {

  }

}
