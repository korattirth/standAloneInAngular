import { Component, Input } from '@angular/core';
import { Form } from '../../dynamic-form.component';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
  @Input() field!: Form;
}
