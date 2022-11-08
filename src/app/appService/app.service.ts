import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Login } from "../state/login/login.model";

@Injectable({
  providedIn: 'root'
})
export class AppService{
  readonly baseUrl:string = environment.baseUrl;
  constructor(private http:HttpClient){}

  post_login(credential:Login):Observable<any>{
    return this.http.post(`${this.baseUrl}/login`, credential)
    .pipe(
      map((o)=>o)
    );
  }
}
