//Imports Angular
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Import SubModules
import { PrimengModule } from './modules/primeng/primeng.module';

import { LoginComponent } from './components/login/login.component';

//Default Components
import { InputValidatorComponent } from './default-components/input-validator/input-validator.component';
import { LabelErrorComponent } from './default-components/label-error/label-error.component';
import { ProgressSpinnerComponent } from './default-components/progress-spinner/progress-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputValidatorComponent,
    LabelErrorComponent,
    ProgressSpinnerComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    //Mask
    NgxMaskDirective, NgxMaskPipe,

    //Import Sub-Modules
    PrimengModule,
  ],
  providers: [
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
