import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  player = 1
  title = 'rps-rgb'
  player1Choice : string = ""
  player2Choice : string = ""
  winner = ''



  switchPlayer() {
    this.player++;
    if (this.player == 3) {
      this.showWinner()
    }
  }

  setPlayerChoice(choice : string) {
    if (this.player == 1) {
      this.player1Choice = choice
    }
    else if (this.player == 2) {
      this.player2Choice = choice
    }
  }


  showWinner() {
    if (this.player1Choice == this.player2Choice) {
      this.winner = 'Tie!'
      return
    }
    if (this.player1Choice == 'rock' && this.player2Choice == 'paper') {
      this.winner = 'Player 2'
    }
    else if (this.player1Choice == 'rock' && this.player2Choice == 'scissors') {
      this.winner = 'Player 1'
    }
    else if (this.player1Choice == 'paper' && this.player2Choice == 'rock') {
      this.winner = 'Player 1'
    }
    else if (this.player1Choice == 'paper' && this.player2Choice == 'scissors') {
      this.winner = 'Player 2'
    }
    else if (this.player1Choice == 'scissors' && this.player2Choice == 'paper') {
      this.winner = 'Player 1'
    }
    else if (this.player1Choice == 'scissors' && this.player2Choice == 'rock') {
      this.winner = 'Player 2'
    }

    this.winner += ' Wins!'
  }

}
