import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rgb',
  templateUrl: './rgb.component.html',
  styleUrls: ['./rgb.component.css'],
})
export class RGBComponent {
  player = 1;
  title = 'rps-rgb';
  player1Choice: string = '';
  player2Choice: string = '';
  currChoice: string = '';
  @Output() currChoiceEvent = new EventEmitter<string>();
  winner = '';
  textColor = '000';

  switchPlayer() {
    this.player++;
    this.currChoice = 'fff';
    this.textColor = '000';
    this.currChoiceEvent.emit(this.currChoice);
    if (this.player == 3) {
      this.showWinner();
      this.updateTextColor();
    }
  }

  showWinner() {
    var p1 = parseInt(this.player1Choice, 16);
    var p2 = parseInt(this.player2Choice, 16);

    if (p1 + 8290687 > p2 % 16581375) {
      this.winner = 'Player 1 Wins!';
      this.currChoice = this.player1Choice;
      this.currChoiceEvent.emit(this.currChoice);
    } else {
      this.winner = 'Player 2 Wins!';
      this.currChoice = this.player2Choice;
      this.currChoiceEvent.emit(this.currChoice);
    }
  }

  handlePlayerChoice($event: any) {
    this.currChoice = $event.target.value;
    //this.currChoiceEvent.emit(this.currChoice);
    this.updateTextColor();
  }

  updateTextColor() {
    if (this.currChoice.length == 6) {
      var red = parseInt(
        this.currChoice.slice(0, this.currChoice.length / 3),
        16
      );
      var blue = parseInt(
        this.currChoice.slice(0, this.currChoice.length / 3),
        16
      );
      var green = parseInt(
        this.currChoice.slice(0, this.currChoice.length / 3),
        16
      );

      this.textColor =
        red * 0.299 + green * 0.587 + blue * 0.114 > 186 ? '000000' : 'ffffff';
      console.log(this.textColor);
      this.currChoiceEvent.emit(this.currChoice);
    }
  }
}
