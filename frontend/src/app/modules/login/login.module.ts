// Imports Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/components/login/login.component';
import { DefaultComponentsModule } from '../default-components/default-components.module';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    DefaultComponentsModule,
    PrimengModule,
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
