import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { GetTranslateService } from 'src/app/services/utils/get-translate/get-translate.service';
import { ThemeService } from 'src/app/services/utils/theme/theme.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  //Subscriptions
  subscriptions: Subscription[] = [];
  
  //Form Controls
  formControlUsername = new FormControl('', [Validators.required]);
  labelRequiredUser: string = '';

  formControlPassword = new FormControl('', [Validators.required]);
  labelRequiredPassword: string = '';

  //Status of form submition
  submited = false;

  //Logo by theme
  theme: string = 'light';

  constructor(
    private themeService: ThemeService,
    public translateService: GetTranslateService
  ) { }

  ngOnInit(): void {
    this.translateConfigToLoginModule();
    this.getTheme();
  }

  translateConfigToLoginModule() {
    this.translateService.addLangs(this.translateService.supportedLanguages());
    let defaultLanguage = this.translateService.getLanguage();
    this.translateService.setLanguage(defaultLanguage);
    this.translateService.setDefaultLang(defaultLanguage);
    this.translateService.use(defaultLanguage);
    this.translateService.primeNgTranslate();
  }

  getTheme() {
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

  changeLanguage() {
    let defaultLanguage = this.translateService.getLanguage();
    let newLanguage = (defaultLanguage == 'en' ? 'pt':'en');

    this.translateService.setLanguage(newLanguage);
    this.changeLanguageWithReload();
    // this.changeLanguageWithoutReload(newLanguage);
  }

  // Works for all project modules.
  changeLanguageWithReload() {
    location.reload();
  }

  // Only works for the current module in the project.
  changeLanguageWithoutReload(language: string) {
    this.translateService.use(language);
  }

  onChangeHandleInput() {
    this.labelRequiredUser = this.translateService.translate('login.requiredUser');
    this.labelRequiredPassword = this.translateService.translate('login.requiredPassword');
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

    else {
      this.onChangeHandleInput();
    }
  }

  inativeUserWarning() {
    this.resetFormControl();
    this.labelRequiredUser = '';
    this.labelRequiredPassword = this.translateService.translate('login.inactiveUser');
  }

  incorrectUserWarning() {
    this.resetFormControl();
    this.labelRequiredUser = '';
    this.labelRequiredPassword = this.translateService.translate('login.incorrectUserOrPassword');
  }

  resetFormControl() {
    this.formControlUsername.reset();
    this.formControlPassword.reset();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    })
  }
}
