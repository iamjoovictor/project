import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemeService } from 'src/app/services/theme/theme.service';

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

  //Logo by theme
  theme: string = 'light';

  constructor(
  private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.theme = this.themeService.getTheme();
  }

  changeTheme() {
    this.theme = this.themeService.getTheme();
    this.theme = (this.theme == 'dark' ? 'light':'dark');

    this.themeService.setTheme(this.theme);

    this.theme = this.themeService.getTheme();
  }
}
