import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { DiceComponent } from './dice/dice.component';


@NgModule({
  declarations: [
    AppComponent,
    ScoreBoardComponent,
    DiceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
