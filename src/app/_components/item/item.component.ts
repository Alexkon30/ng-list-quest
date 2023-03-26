import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/_types/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  constructor(private router: Router) {}
  @Input() item: Item | null = null;

  openItemInfo(id?: number) {
    if (id) this.router.navigate(['/info', id]);
  }
}
