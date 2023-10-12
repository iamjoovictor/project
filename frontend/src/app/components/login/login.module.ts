// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing Import
import { LoginRoutingModule } from 'src/app/components/login/login-routing.module';

// Component Imports
import { LoginComponent } from 'src/app/components/login/login.component';

// Module Imports
import { DefaultComponentsModule } from 'src/app/default-components/default-components.module';
import { PrimengModule } from 'src/app/modules/primeng/primeng.module';

// Translate Imports
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GetTranslateService } from 'src/app/services/utils/get-translate/get-translate.service';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    // Angular Imports
    CommonModule,

    // Routing Import
    LoginRoutingModule,

    // Module Imports
    DefaultComponentsModule,
    PrimengModule,

    // Translate Imports
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, '../../../assets/i18n/login/', '.json');
        },
        deps: [HttpClient]
      },
      isolate: true,
    })
  ],
  providers: [
    GetTranslateService
  ],
})
export class LoginModule {
}
