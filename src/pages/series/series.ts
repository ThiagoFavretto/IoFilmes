import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ApiProvider } from "../../providers/api/api";
import { SerieDetalhePage } from "../serie-detalhe/serie-detalhe";

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
    public series: ApiProvider,
    public navParams: NavParams
  ) {
    let l = navParams.get("l");
    let t = navParams.get("t");
    this.type = t;
    this.lang = l;
  }

  listSeries = new Array<any>();
  results = new Array<any>();
  pg = 1;

  ionViewDidLoad() {
    this.apiOn();
  }

  apiOn() {
    this.series.getMovies(this.pg, this.type, this.lang).subscribe(
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
    for (var cont in this.results) {
      if (this.results[cont].backdrop_path != null) {
        this.listSeries.push(this.results[cont]);
      }
    }
  }

  description(serie) {
    this.navCtrl.push(SerieDetalhePage, {
      id: serie.id,
      l: this.lang
    });
  }

  reLoad() {
    this.pg++;
    this.apiOn();
  }

  flag = false; // resolve um bug(????)
  getNext() {
    if (this.flag) this.reLoad();
    else this.flag = true;
  }
}
