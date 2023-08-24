import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { MainComponent } from './pages/home/main/main.component';
import { CodeEditorComponent } from './pages/home/code-editor/code-editor.component';
import { SobremimComponent } from './pages/section/sobremim/sobremim.component';
import { ConhecimentosComponent } from './pages/section/conhecimentos/conhecimentos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultadosComponent } from './pages/section/resultados/resultados.component';
import { CardsComponent } from './shared/components/cards/cards.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MobileMenuComponent } from './shared/components/mobile-menu/mobile-menu.component';
import { DuvidasComponent } from './pages/section/duvidas/duvidas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CodeEditorComponent,
    SobremimComponent,
    ConhecimentosComponent,
    ResultadosComponent,
    CardsComponent,
    FooterComponent,
    MobileMenuComponent,
    DuvidasComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
