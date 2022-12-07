import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranscriptorComponent } from './components/transcriptor/transcriptor.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LandingComponent } from './components/landing/landing.component';
import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';


const rutas: Routes = [
  {path: '', component:LandingComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: '**', component:PaginaErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TranscriptorComponent,
    TutorialComponent,
    AboutComponent,
    ContactComponent,
    LandingComponent,
    PaginaErrorComponent
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
