import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'part4Homework1';

  userData: any;
  userForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.userData = {
      fullname: '',
      email: '',
      postalAddress: '',
      comments: '',
    };

    this.userForm = this.fb.group({
      fullname: [this.userData.fullname, Validators.required],
      email: [this.userData.email, Validators.required],
      postAddress: [this.userData.postAddress, Validators.required],
      comments: [this.userData.comments,],
    });
  }

  onSubmit(frm: FormGroup) {
    window.alert(frm.controls.fullname.value);

  }
}
