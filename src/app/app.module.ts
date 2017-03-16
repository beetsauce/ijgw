// Import Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from "ui-router-ng2";

// Import Components
import { AppComponent } from './app.component';
import { EpisodeListComponent } from './components/episodes/episode.component';
import { ContactComponent } from './components/contact/contact.component';

// Import Services
import { ContactService } from './services/contact/contact.service';

// States
let STATES = [
  {
    'name'     : 'episodes',
    'url'      : '/episodes',
    'component': EpisodeListComponent
  },
  {
    'name'     : 'contact',
    'url'      : '/contact',
    'component': ContactComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EpisodeListComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    UIRouterModule.forRoot( { states: STATES } )
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
