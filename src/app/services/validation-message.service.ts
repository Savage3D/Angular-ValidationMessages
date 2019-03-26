import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationMessageService {
  private errorMessages: Map<string, Function> = new Map([
    ['required', () => { return 'This field is requied'; }],
    ['email', () => { return 'Email is not valid'; }],
    ['minlength', (errorInfo: any) => {
      return `Must be at least ${errorInfo.requiredLength} characters (${errorInfo.actualLength}/${errorInfo.requiredLength} now)`;
    }]
  ]);
 
  constructor() { }

  private getByKey(control: AbstractControl, errorKey: string): string {
    if (!this.errorMessages.has(errorKey)) 
      return `Ooops...The error '${errorKey}' is undefined :)`;
    
    return this.errorMessages.get(errorKey)(control.errors[errorKey]);
  }

  getAll(control: AbstractControl): string[] | null {
    if (!control) return null;
    if (!control.errors) return [];

    const errorKeys: string[] = Object.keys(control.errors);
    const messages: string[] = errorKeys.map((errorKey: string) => {
      return this.getByKey(control, errorKey);
    });

    return messages;
  }

  getFirst(control: AbstractControl): string | null {
    return this.getAll(control)[0];
  }
}
