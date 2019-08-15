import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ApiProvider } from "../../providers/api/api";
import { FilmesPage } from "../filmes/filmes";
import { SeriesPage } from "../series/series";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  providers: [ApiProvider]
})
export class HomePage {
  lang: any;
  type: any;

  constructor(public navCtrl: NavController, public config: ApiProvider) {}

  save() {
    if (this.type == "tv") {
      this.navCtrl.push(SeriesPage, {
        l: this.lang,
        t: this.type
      });
    } else {
      this.navCtrl.push(FilmesPage, {
        l: this.lang,
        t: this.type
      });
    }
  }
}
