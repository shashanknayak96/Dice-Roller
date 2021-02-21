import { Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations'; 
import { shake } from 'ngx-animate';
import { DiceServiceService } from '../dice-service.service';


@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css'],
  animations: [
    trigger('shake', [
      transition('* => *', [
        useAnimation(shake)
      ])
    ])
  ]
})
export class DiceComponent implements OnInit{
  number: number = 6;
  shake: boolean = false;
  gameOver: boolean = false;

  constructor(private svDice: DiceServiceService) {

  }
  
  ngOnInit(){
    this.svDice.gameOver
      .subscribe(
        () => {
          this.gameOver = true;
        })
  }

  rollDice(){
    this.number = this.svDice.rollDice();
    this.shake = !this.shake;
  }

  resetDice(){
    this.svDice.resetScore();
    this.gameOver = false;
  }

}
