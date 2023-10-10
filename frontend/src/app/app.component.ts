import { Component } from '@angular/core';
import { ThemeService } from './services/utils/theme/theme.service';
import { AuthService } from './services/utils/auth/auth.service';
import { PrimeNGConfig } from 'primeng/api';
import { GetTranslateService } from './services/utils/get-translate/get-translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private primengConfig: PrimeNGConfig,
    private themeService: ThemeService,
    private translateService: GetTranslateService
  ) { }

  ngOnInit(): void {
    this.setDefaultTheme();
    this.primengConfiguration();
    this.translateConfig();
  }

  //Set initial theme
  setDefaultTheme() {
    let defaultTheme = this.themeService.getTheme();

    this.themeService.setTheme(defaultTheme);

    this.primengConfig.ripple = true;
  }

  //PrimeNg Config
  primengConfiguration() {
    this.primengConfig.ripple = true;
  }

  //Translate Config
  translateConfig() {
    this.translateService.addLangs(['pt', 'en']);
    let defaultLanguage = this.translateService.getLanguage();
    this.translateService.setLanguage(defaultLanguage);
    this.translateService.setDefaultLang(defaultLanguage);
    this.translateService.use(defaultLanguage);
    this.translateService.primeNgTranslate();
  }
}
