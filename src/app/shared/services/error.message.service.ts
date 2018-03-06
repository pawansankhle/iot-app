import {Injectable} from '@angular/core';

@Injectable()

export class ErrorMessageService {
  constructor() {}

  getFormErrorMessage(field) {
    return field.hasError('required') ? 'this Field is Required.' :
    field.hasError('email') ? 'Not a valid email.' :
    field.hasError('minlength') ? 'minimum lenght required' : field.hasError('minlength') ? 'max lenght required' : '';
  }

}
