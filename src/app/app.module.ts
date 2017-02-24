// Import Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from "ui-router-ng2";

// Import Components
import { AppComponent } from './app.component';
import { EpisodeListComponent } from './components/episodes/episode.component';
import { ContactComponent } from './components/contact/contact.component';

// States
let episodeState = { 'name': 'episodes', 'url': '/episodes', 'component': EpisodeListComponent };
let contactState = { 'name': 'contact', 'url': '/contact', 'component': ContactComponent }


@NgModule({
  declarations: [
    AppComponent,
    EpisodeListComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UIRouterModule.forRoot( { states: [ contactState, episodeState ], useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
