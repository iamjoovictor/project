import { Component } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.setDefaultTheme();
  }

  //Set initial theme
  setDefaultTheme() {
    let defaultTheme = this.themeService.getTheme();

    this.themeService.setTheme(defaultTheme);
  }
}
