import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit{

  constructor(
    private formBuilder: FormBuilder
  ) {}

  forgotPassForm: FormGroup = this.formBuilder.group({});

  ngOnInit() {
    this.forgotPassForm = this.formBuilder.group(
      {
        email: ['',
          [
            Validators.required,
            Validators.email
          ]
        ]
      }
    )
  }


  forgetPassword() {

  }

}
