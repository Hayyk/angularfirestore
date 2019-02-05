import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MembersService } from '../../services/members.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  numberValidator = /[0-9]+/;
  postForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    number: new FormControl('', [
      Validators.required,
      Validators.pattern(this.numberValidator)
    ]),
  });
  private submitButtonState:boolean = true;
  constructor(private membersService: MembersService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitButtonState = false;
    this.membersService.add(this.postForm.value)
      .then(() => {
        this.submitButtonState = true;
      })
      .catch(() => {
        this.submitButtonState = true;
      });
    this.postForm.setValue({
      name: '',
      email: '',
      number: ''
    });
  }
}
