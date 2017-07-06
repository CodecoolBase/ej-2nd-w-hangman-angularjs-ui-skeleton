import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { AppModule } from '../app.module'

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  toGuess: String;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  submit() {
    this.http.post(
      AppModule.HANGMAN_SERVICE_URL + '/start',
      { toGuess: this.toGuess },
    )
  }

}
