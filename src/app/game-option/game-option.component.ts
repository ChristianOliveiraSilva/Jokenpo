import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Option } from './Option';

@Component({
  selector: 'app-game-option',
  templateUrl: './game-option.component.html',
  styleUrls: ['./game-option.component.css']
})
export class GameOptionComponent {

  @Input() option!: Option;
  @Output() clickEmit = new EventEmitter();
  constructor() { }

  getSymbol() {
    switch (this.option) {
      case 'rock':
        return '🧱'
      case 'paper':
        return '🧾'
      case 'scissor':
        return '✂'
      default:
        return 'Ops...'
        break;
    }
  }

}
