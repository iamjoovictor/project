import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  //Form Controls
  name = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  //Status of form submition
  submited = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
