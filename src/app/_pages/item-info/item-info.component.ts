import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItemsService } from 'src/app/_services/items.service';
import { Item } from 'src/app/_types/item';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss'],
})
export class ItemInfoComponent implements OnInit {
  item: Item | null = null;
  itemSubscription!: Subscription;
  routeSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsService
  ) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((params) => {
      this.itemSubscription = this.itemsService
        .getItem(params['id'])
        .subscribe((item) => (this.item = item));
    });
  }

  ngOnDestroy() {
    this.itemSubscription.unsubscribe()
    this.routeSubscription.unsubscribe()
  }
}
