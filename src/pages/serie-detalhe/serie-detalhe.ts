import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ApiProvider } from "../../providers/api/api";

/**
 * Generated class for the SerieDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-serie-detalhe",
  templateUrl: "serie-detalhe.html",
  providers: [ApiProvider]
})
export class SerieDetalhePage {
  id;
  desc;
  lang;
  list;
  constructor(
    public navCtrl: NavController,
    public filmes: ApiProvider,
    public navParams: NavParams
  ) {
    let id = navParams.get("id");
    let l = navParams.get("l");
    this.id = id;
    this.lang = l;
    console.log(this.id);
  }

  ionViewDidLoad() {
    this.filmes.getDesc(this.id, this.lang, "tv").subscribe(
      data => {
        const dat = data as any;
        this.desc = JSON.parse(dat._body);
        this.gen(this.desc.genres);
      },
      err => {
        console.log("erro", err);
      }
    );
  }

  gen(genr) {
    let ax = "";
    for (let g of genr) {
      ax += `${g.name}, `;
    }
    this.list = ax.substring(0, ax.length - 2);
  }
}
