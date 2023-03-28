import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  @HostBinding('class') className = '';
  darkClassName = 'darkMode';

  toggleMode(isLight: boolean) {
    this.className = isLight ? '' : this.darkClassName;
  }
}
