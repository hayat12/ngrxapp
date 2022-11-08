import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { Post } from "../state/post.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class PostService{
  constructor(private http: HttpClient){}
  getPosts():Observable<Post[]>{
    const params = new HttpParams().set("_page", "1").set("_limit", "10")
    return this.http.get<Post[]>(`${environment.baseUrl}/posts`, {params});
  }

}
