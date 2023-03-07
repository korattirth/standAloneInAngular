import { Component ,Input, OnInit} from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { Form } from '../../dynamic-form.component';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  @Input() field!: Form;
  public formGroup!: FormGroup;
  constructor(private controlContainer : ControlContainer) {
  }
  ngOnInit(): void {
    this.formGroup = <FormGroup>this.controlContainer.control;
  }

}
