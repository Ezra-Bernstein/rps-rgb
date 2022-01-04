import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  show: boolean = false;
  regular: boolean = true;
  backgroundColor: string = 'fff';

  isRegular(i: boolean) {
    if (this.regular != i) {
      this.backgroundColor = 'fff';
    }
    this.show = true;
    this.regular = i;
  }

  handleColorChange(color: string) {
    this.backgroundColor = color;
  }
}
