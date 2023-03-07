import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form } from '../dynamic-form.component';
import { SharedFiledModule } from './shared-filed/shared-filed.module';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule,SharedFiledModule],
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {
  @Input() field!: Form;
  ngOnInit(): void {
    
  }

}
