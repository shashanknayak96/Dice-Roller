import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiceServiceService {

  @Output() scoreChanged = new Subject<Array<number>>();
  @Output() gameOver = new Subject<boolean>();
  
  
  constructor() { }

  scores: Array<number> = [];
  number: number = 6;

  rollDice() {
    this.number = Math.floor(Math.random() * 6 + 1);
    this.updateScore();
    return this.number;
  }
  
  updateScore(){
    this.scores.push(this.number);
    if(this.scores.length >= 10){
      this.gameOver.next();
    }
    this.scoreChanged.next(this.scores.slice());
  } 

  resetScore(){
    this.scores = [];
    this.scoreChanged.next(this.scores.slice());
  }

}
