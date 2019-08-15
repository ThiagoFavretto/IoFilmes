import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { FilmesPage } from "../pages/filmes/filmes";
import { HomePage } from "../pages/home/home";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HttpModule } from "@angular/http";
import { ApiProvider } from "../providers/api/api";
import { SeriesPage } from "../pages/series/series";

@NgModule({
  declarations: [MyApp, FilmesPage, HomePage, SeriesPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, FilmesPage, HomePage, SeriesPage],
  providers: [
    StatusBar,
    SplashScreen,
    ApiProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
