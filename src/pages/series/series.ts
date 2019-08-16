import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ApiProvider } from "../../providers/api/api";
import { SerieDetalhePage } from "../serie-detalhe/serie-detalhe";
/**
 * Generated class for the TvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-series",
  templateUrl: "series.html",
  providers: [ApiProvider]
})
export class SeriesPage {
  type;
  lang;
  constructor(
    public navCtrl: NavController,
    public filmes: ApiProvider,
    public navParams: NavParams
  ) {
    let l = navParams.get("l");
    let t = navParams.get("t");
    this.type = t;
    this.lang = l;
  }

  listFilmes = new Array<any>();
  results = new Array<any>();
  pg = 1;

  ionViewDidLoad() {
    this.apiOn();
  }

  apiOn() {
    this.filmes.getMovies(this.pg, this.type, this.lang).subscribe(
      data => {
        const dat = data as any;
        const ress = JSON.parse(dat._body);
        this.results = ress.results;
        this.removeNull();
      },
      err => {
        console.log("erro", err);
      }
    );
  }

  removeNull() {
    this.listFilmes = [];
    for (var cont in this.results) {
      if (this.results[cont].backdrop_path != null) {
        this.listFilmes.push(this.results[cont]);
      }
    }
  }

  description(filme) {
    this.navCtrl.push(SerieDetalhePage, {
      id: filme.id,
      l: this.lang
    });
  }

  reLoad() {
    this.pg++;
    this.apiOn();
  }
}
