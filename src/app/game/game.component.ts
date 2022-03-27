import { Component, OnInit } from '@angular/core';
import { Option } from '../game-option/Option';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }
  option!: Option;
  name = '';
  result = '';
  gameOption = '';

  ngOnInit(): void {
    
  }

  runGame(option: Option): void {
    this.option = option;
    this.name = this.getOptionName()
    this.result = this.verifyWinner()
  }

  getOptionName() {
    switch (this.option) {
      case 'rock':
        return 'pedra'
      case 'paper':
        return 'papel'
      case 'scissor':
        return 'tesoura'
      default:
        return 'Ops...'
    }
  }

  verifyWinner(): string {
    console.log(1);
    
    const gameRule = {
      rock: {
        win: 'scissor', lose: 'paper'
      },
      scissor: {
        win: 'paper', lose: 'rock'
      },
      paper: {
        win: 'rock', lose: 'scissor'
      },
    }

    type ObjectKey = keyof typeof gameRule;
    const gameOption = ['rock','paper','scissor'][Math.floor(Math.random() * 3)]
    console.log(this.option, this.gameOption);
    
    if (this.gameOption == this.option) {
      return 'empate!'
    }

    if (gameRule[this.gameOption as ObjectKey].win == this.option) {
      return 'perdeu!'
    }

    if (gameRule[this.option as ObjectKey].win == this.gameOption) {
      return 'ganhou!'
    }

    return 'empate'
  }


}
