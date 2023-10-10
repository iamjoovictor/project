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
  formControlUsername = new FormControl('', [Validators.required]);
  labelRequiredUser: string = 'Usuário é obrigatório';

  formControlPassword = new FormControl('', [Validators.required]);
  labelRequiredPassword: string = 'Senha é obrigatória';

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
    setTimeout(() => {
      this.theme = this.themeService.getTheme();
      this.theme = (this.theme == 'dark' ? 'light':'dark');
  
      this.themeService.setTheme(this.theme);
  
      this.theme = this.themeService.getTheme();
    }, 200)
  }

  onBlurHandleInput() {
    this.labelRequiredUser = 'Usuário é obrigatório';
    this.labelRequiredPassword = 'Senha é obrigatória';
  }

  onClickHandleLogin() {
    this.submited = true;

    this.verifyLogin();
  }

  verifyLogin() {
    let username = this.formControlUsername.value;
    let password = this.formControlPassword.value;

    if(username?.trim() && password?.trim()) {
      if(username == 'admin' && password == '123') {
        this.inativeUserWarning();
      }

      else {
        this.incorrectUserWarning();
      }
    }
  }

  inativeUserWarning() {
    this.resetFormControl();
    this.labelRequiredUser = '';
    this.labelRequiredPassword = 'Usuário Inativo';
  }

  incorrectUserWarning() {
    this.resetFormControl();
    this.labelRequiredUser = '';
    this.labelRequiredPassword = 'O usuário ou senha inseridos estão incorretos!';
  }

  resetFormControl() {
    this.formControlUsername.reset();
    this.formControlPassword.reset();
  }
}
