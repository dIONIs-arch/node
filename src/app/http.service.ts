import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Color } from "./color";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  getData() {
    let data: any;
    this.http.get("http://localhost:3000/getcolor").subscribe((data) => {
      data = data;
      console.log(data);
    })
  }

  postData() {
    let data: any;
    this.http.post("http://localhost:3000/postcolor", {"color": "#111111"}).subscribe((data) => {
      data = data;
      console.log(data);
    })
  }
}
