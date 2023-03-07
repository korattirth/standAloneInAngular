import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { DatePickerComponent } from '../date-picker/date-picker.component';
import { TextAreaComponent } from '../text-area/text-area.component';
import { TextBoxComponent } from '../text-box/text-box.component';

@NgModule({
  declarations: [TextBoxComponent, TextAreaComponent, DatePickerComponent],
  imports: [MatInputModule,MatDatepickerModule,ReactiveFormsModule,FormsModule],
  exports: [
    TextBoxComponent,
    TextAreaComponent,
    DatePickerComponent,
  ],
})
export class SharedFiledModule {}
