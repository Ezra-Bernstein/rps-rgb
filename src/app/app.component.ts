import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  show: boolean = false;
  regular: boolean = true;
  backgroundColor: string = '363636';

  isRegular(i: boolean) {
    if (this.regular != i) {
      this.backgroundColor = '363636';
    }
    this.show = true;
    this.regular = i;
  }

  handleColorChange(color: string) {
    this.backgroundColor = color;
  }
}
