// Imports Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Imports PrimeNG
import { AutoFocusModule } from 'primeng/autofocus';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListboxModule } from 'primeng/listbox';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PasswordModule } from 'primeng/password';
import { TagModule } from 'primeng/tag';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [],
  imports: [
    AutoFocusModule,
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CarouselModule,
    ChartModule,
    CheckboxModule,
    ChipsModule,
    CommonModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    FileUploadModule,
    ImageModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    ListboxModule,
    MenubarModule,
    MultiSelectModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    TableModule,
    TabViewModule,
    ToastModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TreeTableModule,
    SelectButtonModule,
    RadioButtonModule,
    PasswordModule,
    TagModule,
    SkeletonModule
  ],
  exports:[
    AutoFocusModule,
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CarouselModule,
    ChartModule,
    CheckboxModule,
    ChipsModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    FileUploadModule,
    ImageModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    ListboxModule,
    MenubarModule,
    MultiSelectModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    TableModule,
    TabViewModule,
    ToastModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TreeTableModule,
    SelectButtonModule,
    RadioButtonModule,
    PasswordModule,
    TagModule,
    SkeletonModule
  ],
  providers: [
    ConfirmationService,
    MessageService,
  ]
})
export class PrimengModule { }
