import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CodeEditorComponent } from './pages/home/components/code-editor/code-editor.component';
import { ConhecimentosComponent } from './pages/home/components/conhecimentos/conhecimentos.component';
import { DuvidasComponent } from './pages/home/components/duvidas/duvidas.component';
import { FooterComponent } from './pages/home/components/footer/footer.component';
import { HeaderComponent } from './pages/home/components/header/header.component';
import { MainComponent } from './pages/home/components/main/main.component';
import { ResultadosComponent } from './pages/home/components/resultados/resultados.component';
import { SobremimComponent } from './pages/home/components/sobremim/sobremim.component';
import { MobileMenuComponent } from './shared/components/mobile-menu/mobile-menu.component';
import { CardsComponent } from './pages/home/components/cards-speed/cards.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CodeEditorComponent,
    SobremimComponent,
    ConhecimentosComponent,
    ResultadosComponent,
    FooterComponent,
    MobileMenuComponent,
    DuvidasComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
