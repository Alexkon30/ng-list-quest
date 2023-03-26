import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { CustomValidators } from 'src/app/_utils/custom-validators';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent {
  titleMinLenght = 5;
  contentMinLength = 15;

  itemForm = this.fb.group({
    title: ['', [CustomValidators.required, CustomValidators.minLength(this.titleMinLenght)]],
    content: ['', [CustomValidators.required, CustomValidators.minLength(this.contentMinLength)]],
  });

  constructor(private fb: FormBuilder) { }

  addItem() {
    console.log({...this.itemForm.value})
  }

  tooltipHint(chars: number) {
    return `Minimum characters length is ${chars}`
  }
}
