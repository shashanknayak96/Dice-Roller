import { Component, OnInit } from '@angular/core';
import { DiceServiceService } from '../dice-service.service';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit{

  scores: Array<number>;
  totalScore: number;

  constructor(private svDice: DiceServiceService) { }

  ngOnInit(){
    this.svDice.scoreChanged
      .subscribe((number)=> {
        this.scores = number;
      })

    this.svDice.gameOver
      .subscribe(() => {
        this.totalScore = this.svDice.getScoreTotal();
      })
  }
}
