import { Injectable } from "@angular/core";
import { SuperAdmin } from "./super-admin";
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import { findIndex } from 'lodash';

@Injectable()
export class SuperadminService {
  constructor(private _http: Http) { }
  base_url = 'http://localhost:3000/blooDonor/'


  getItems(data) {
    console.log(data, "data in get item")
console.log(`${this.base_url}${data}`,"jjjjjjjjjjjj")
    return this._http.get(`${this.base_url}${data}`).
      map(data => {
        console.log(data.json());
        return data.json()
      })
  }
  addItems(url, data) {
    console.log(data, "data in add item")

    return this._http.post(`${this.base_url}${url}`, data).
      map(data => {
        console.log(data.json());
        return data.json()
      })
  }
  deleteItems(data) {
    console.log(data, "data in delete")
    return this._http.delete(`${this.base_url}${data}`).
      map(data => {
        console.log(data.json());
        return data.json()
      })
  }
  editItems(url, data) {
    console.log(data, "data in edit item")
    return this._http.put(`${this.base_url}${url}`, data).
      map(data => {
        console.log(data.json(),"json data in edit");
        return data.json()
      })
  }
  login(url, data) {
    console.log("console in servciev login")
    return this._http.post(`${this.base_url}${url}`, data).map(data => {
      console.log(data.json());
      return data.json()
    })

  }
  signup(url, data) {
    console.log(data,"signup data in service")
    // console.log(data,"signup data in service")
    return this._http.post(`${this.base_url}${url}`, data).map(data => {
      console.log(data.json(),"sjon data");
      return data.json()
    })

  }

}
  // ------------Reciever

