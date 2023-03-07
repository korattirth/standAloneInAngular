import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import formData from '../../../hepler/Data.json';
import { FormFieldComponent } from './form-field/form-field.component';

export interface Form {
  id: Number;
  label: string;
  name: string;
  fieldType: Number;
  placeholder: string;
  required: boolean;
}

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, FormFieldComponent, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  formFieldData: Form[] = [];
  dynamicForm!: FormGroup;
  ngOnInit(): void {
    this.formFieldData = formData;
    this.dynamicForm = new FormGroup(this.formInitilize());
  }

  private formInitilize() {
    const formGroupFields: any = {};
    if (this.formFieldData) {
      this.formFieldData.map((field) => {
        formGroupFields[field.name] = new FormControl('', Validators.required);
      });
    }
    return formGroupFields;
  }

  onFormSubmit() {
    console.log(this.dynamicForm.value);
  }
}
