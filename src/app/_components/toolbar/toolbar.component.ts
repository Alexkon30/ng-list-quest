import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() toggleMode = new EventEmitter<boolean>();
  @Output() toggleEvent = new EventEmitter<null>();
  isLight = true

  toggleDrawer() {
    this.toggleEvent.emit()
  }

  setLightTheme() {
    this.toggleMode.emit(true)
    this.isLight = true
  }

  setDarkTheme() {
    this.toggleMode.emit(false)
    this.isLight = false
  }
}
