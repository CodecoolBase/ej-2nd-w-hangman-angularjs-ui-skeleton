import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { NewGameComponent } from './new-game/new-game.component';
import { PlayGameComponent } from './play-game/play-game.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HangmanRestService } from './hangman-rest.service'

const appRoutes: Routes = [
  { path: 'new-game', component: NewGameComponent },
  { path: 'play-game', component: PlayGameComponent },
  {
    path: '',
    redirectTo: '/new-game',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewGameComponent,
    PlayGameComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [HangmanRestService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  public static readonly HANGMAN_SERVICE_URL = "http://localhost:8080/hangman-jax-rs/hangman/service";
}
