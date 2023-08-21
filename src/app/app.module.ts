import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { MainComponent } from './pages/home/main/main.component';
import { CodeEditorComponent } from './shared/components/code-editor/code-editor.component';
import { SobremimComponent } from './pages/section/sobremim/sobremim.component';
import { ConhecimentosComponent } from './pages/section/conhecimentos/conhecimentos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultadosComponent } from './pages/section/resultados/resultados.component';
import { CardsComponent } from './shared/components/cards/cards.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ProjetosComponent } from './pages/section/projetos/projetos.component';
import { ScrollRevealModule } from './shared/animations/modules/scroll-reveal.module';
import { CountModule } from './shared/animations/modules/count.module';


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
    ProjetosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollRevealModule,
    CountModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
