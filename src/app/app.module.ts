import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { Banner2Component } from './components/banner2/banner2.component';
import { ContatoComponent } from './components/contato/contato.component';
import { JavaComponent } from './components/curso/java/java.component';
import { HtmlComponent } from './components/curso/html/html.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CursosComponent,
    SobreComponent,
    Banner2Component,
    ContatoComponent,
    JavaComponent,
    HtmlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
