import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranscriptorComponent } from './components/transcriptor/transcriptor.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { LandingComponent } from './components/landing-tw/landing.component';
import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';
import { LandingYTComponent } from './landing-yt/landing-yt.component';
import { TranscriptorYTComponent } from './transcriptor-yt/transcriptor-yt.component';
import { TutorialYTComponent } from './tutorial-yt/tutorial-yt.component';
import { PaginaEnConstruccionComponent } from './pagina-en-construccion/pagina-en-construccion.component';


const rutas: Routes = [
  {path: '', component:LandingComponent},
  {path: 'twitter', component:LandingComponent},
  {path: 'youtube', component:PaginaEnConstruccionComponent},
  {path: '**', component:PaginaErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TranscriptorComponent,
    TutorialComponent,
    LandingComponent,
    PaginaErrorComponent,
    LandingYTComponent,
    TranscriptorYTComponent,
    TutorialYTComponent,
    PaginaEnConstruccionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FontAwesomeModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
