import { Component ,Input} from '@angular/core';
import { Form } from '../../dynamic-form.component';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {
  @Input() field!: Form;
}
