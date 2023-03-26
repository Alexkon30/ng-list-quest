import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  constructor(
    private router: Router) {}
  @Input() item = { title: '', content: '', id: 0}

  openItemInfo(id: number) {
    this.router.navigate(['/info', id])
  }
}
