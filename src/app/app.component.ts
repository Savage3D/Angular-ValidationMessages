import { ValidationMessageService } from './services/validation-message.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validationMessage: ValidationMessageService
  ) { 
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  getErrorMessageFor(controlName: string): string {
    const control: AbstractControl = this.signupForm.get(controlName);
    return this.validationMessage.getFirst(control);
  }

  signup(): void {
    console.log(this.signupForm.value);
    this.signupForm.reset();
  }
}
