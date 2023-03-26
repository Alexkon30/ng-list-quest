import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemsService } from 'src/app/_services/items.service';
import { Item } from 'src/app/_types/item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  items: Item[] = [];
  itemsSubscription!: Subscription;

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemsSubscription = this.itemsService
      .getItems()
      .subscribe((items) => (this.items = items));
  }

  ngOnDestroy() {
    this.itemsSubscription.unsubscribe();
  }
}
