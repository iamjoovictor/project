// Imports Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Imports Mask
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

// Import Modules
import { PrimengModule } from '../primeng/primeng.module';

// Import Components
import { InputValidatorComponent } from 'src/app/default-components/input-validator/input-validator.component';
import { LabelErrorComponent } from 'src/app/default-components/label-error/label-error.component';
import { ProgressSpinnerComponent } from 'src/app/default-components/progress-spinner/progress-spinner.component';

@NgModule({
  declarations: [
    // Components
    InputValidatorComponent,
    LabelErrorComponent,
    ProgressSpinnerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    PrimengModule,
    ReactiveFormsModule,
  ],
  exports: [
    // Components
    InputValidatorComponent,
    LabelErrorComponent,
    ProgressSpinnerComponent,

    //Modules
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideNgxMask()
  ]
})
export class DefaultComponentsModule { }
