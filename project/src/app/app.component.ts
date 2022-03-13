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
    email: new FormControl(''),
    phone: new FormControl(''),
    message: new FormControl(''),
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
