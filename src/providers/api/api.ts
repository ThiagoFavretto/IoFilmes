import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  baseUrl = "https://api.themoviedb.org/3/";
  key = "?api_key=602050a8e437c2ccaa9dced6039e27e2";
  page = "&page=1";
  type;
  lang = "&language=en";
  constructor(public http: Http) {}

  getMovies(nP?, type = "movie", lang?) {
    this.page = `&page=${nP}`;
    console.log(nP);
    this.type = type;
    console.log(this.type);
    this.lang = `&language=${lang}`;
    return this.http.get(
      this.baseUrl + "discover/" + this.type + this.key + this.page + this.lang
    );
  }
}
