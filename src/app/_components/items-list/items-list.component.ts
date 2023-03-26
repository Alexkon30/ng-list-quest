import { Component } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {
  items = [
    {id: 1, title: 'title 1', content: 'content 1'},
    {id: 2, title: 'title 2', content: 'content 2'}
  ]
}
