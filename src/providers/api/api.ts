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
  constructor(public http: Http) {}

  getMovies(nP, type = "movie", lang = "en") {
    let page = `&page=${nP}`;
    console.log(nP);
    let langT = `&language=${lang}`;
    return this.http.get(
      `${this.baseUrl}discover/${type}${this.key}${page}${langT}`
    );
  }

  getDesc(id, lang, type) {
    let langT = `&language=${lang}`;
    return this.http.get(`${this.baseUrl}${type}/${id}${this.key}${langT}`);
  }
}
