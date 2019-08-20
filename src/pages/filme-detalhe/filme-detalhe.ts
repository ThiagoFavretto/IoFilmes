import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ApiProvider } from "../../providers/api/api";

@IonicPage()
@Component({
  selector: "page-filme-detalhe",
  templateUrl: "filme-detalhe.html",
  providers: [ApiProvider]
})
export class FilmeDetalhePage {
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
    this.filmes.getDesc(this.id, this.lang, "movie").subscribe(
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
