import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mailto, NgxMailtoService } from 'ngx-mailto';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  emailForm: FormGroup;

  constructor(
    private mailtoService: NgxMailtoService,
    private formBuilder: FormBuilder
  ) {
    this.emailForm = this.formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  open(): void {
    const email = this.emailForm.get('email')?.value;
    const message = this.emailForm.get('message')?.value;

    const mailto: Mailto = {
      receiver: 'rpjansma@gmail.com',
      subject: 'New Contact from ' + email,
      body: message,
    };
    this.mailtoService.compose(mailto);
  }

  ngOnInit(): void {}
}
