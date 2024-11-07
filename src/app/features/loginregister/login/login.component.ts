import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) {}

  loginUserFormGroup: FormGroup = this.formBuilder.group({});

  ngOnInit() {
    this.loginUserFormGroup = this.formBuilder.group(
      {
        'email': ['',
          [
            Validators.required,
            Validators.email
          ]
        ],
        'password': ['',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(30)
          ]
        ],
      }
    )
  }

  /**
   * Login new user
   */
  loginUser() {

  }

}
