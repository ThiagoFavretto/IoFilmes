import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ApiProvider } from "../../providers/api/api";

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
    public series: ApiProvider,
    public navParams: NavParams
  ) {
    let id = navParams.get("id");
    let l = navParams.get("l");
    this.id = id;
    this.lang = l;
    console.log(this.id);
  }

  ionViewDidLoad() {
    this.series.getDesc(this.id, this.lang, "tv").subscribe(
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
    for (let gen of genr) {
      ax += `${gen.name}, `;
    }
    this.list = ax.substring(0, ax.length - 2);
  }
}
