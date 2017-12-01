import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'La guilde [OdS]';
  selectedDisplay = 'boss';

  onSelectDisplay(display: string): void {
    this.selectedDisplay = display;
  }
}
