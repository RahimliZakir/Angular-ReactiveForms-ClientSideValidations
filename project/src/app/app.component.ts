import { Component, Injectable } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'appName';

  constructor(private formBuilder: FormBuilder) {}

  //* For Form & Inputs (Grouped)
  identifyForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(''),
      Validators.minLength(10),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(15),
    ]),
  });

  //* FormBuilder Using
  // identifyForm = this.formBuilder.group({
  //   name: [''],
  //   email: [''],
  //   phone: [''],
  //   message: [''],
  // });

  //* For One Input
  // name = new FormControl('');

  // setNameValue(): void {
  //   this.name.setValue('Hello World!');
  // }
}
