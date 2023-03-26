import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItemsService } from 'src/app/_services/items.service';
import { Item } from 'src/app/_types/item';
import { CustomValidators } from 'src/app/_utils/custom-validators';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent {
  titleMinLenght = 5;
  contentMinLength = 15;
  creationSubscription: Subscription | null = null;

  itemForm = this.fb.group({
    title: [
      '',
      [
        CustomValidators.required,
        CustomValidators.minLength(this.titleMinLenght),
      ],
    ],
    content: [
      '',
      [
        CustomValidators.required,
        CustomValidators.minLength(this.contentMinLength),
      ],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private itemsService: ItemsService,
    private router: Router
  ) {}

  addItem() {
    const item: Item = {
      id: Date.now(),
      title: this.itemForm.value.title!,
      content: this.itemForm.value.content!,
    };

    this.creationSubscription = this.itemsService
      .addItem(item)
      .subscribe((result) => {
        this.router.navigate(['']);
      });
  }

  tooltipHint(chars: number) {
    return `Minimum characters length is ${chars}`;
  }

  ngOnDestroy() {
    if (this.creationSubscription) this.creationSubscription.unsubscribe();
  }
}
