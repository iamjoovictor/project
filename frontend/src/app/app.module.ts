//Imports Angular
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Import Modules
import { DefaultComponentsModule } from './modules/default-components/default-components.module';
import { LoginModule } from './modules/login/login.module';
import { PrimengModule } from './modules/primeng/primeng.module';
import { TranslateJsonModule } from './modules/translate/translate-json.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,

    //Import Modules
    DefaultComponentsModule,
    LoginModule,
    PrimengModule,
    TranslateJsonModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
