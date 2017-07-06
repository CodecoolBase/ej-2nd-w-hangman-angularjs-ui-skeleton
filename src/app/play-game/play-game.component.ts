import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { AppModule } from '../app.module'

import { GameStatus } from '../game-status'

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {

  gameStatus: GameStatus = new GameStatus()
  guess: String

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(AppModule.HANGMAN_SERVICE_URL + '/status')
      .toPromise().then(res => {
        console.log(res)
        this.gameStatus.length = res.json().length
      })
  }

  submit() {
    this.http.post(AppModule.HANGMAN_SERVICE_URL + '/guess/' + this.guess, {})
      .toPromise().then(res => {
        console.log(res)
        this.ngOnInit()
      })
  }

}
