import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  routes = [
    {link: '', title: 'List'},
    {link: '/new', title: 'Add new'}
  ]

  @Output() toggleEvent = new EventEmitter<null>();

  toggleDrawer() {
    this.toggleEvent.emit()
  }
}
