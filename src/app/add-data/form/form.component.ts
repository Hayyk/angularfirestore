import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  postForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    number: new FormControl('', [
      Validators.required,
      Validators.pattern('/[0-9]/')
    ]),
  });
  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.postForm.value);
  }
}
