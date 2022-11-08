import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { PostService } from "../services/post.service";
import { createPost, listPost } from "./post.action";

@Injectable()
export class PostEffect{
  constructor(
    private actions$: Actions,
    private _service:PostService){}

  /** @GET POSTS */
  getPosts$ = createEffect(
    ()=>this.actions$.pipe(
      ofType(listPost),
      exhaustMap((action)=>this._service
      .getPosts()
      .pipe(
        map(v=>createPost({id: 111})),
      )
      )
    )
    );

    // routeAction = createEffect()

  /** @VIEW POST */

  /** @CREATE POST */

  /** @UPDATE POST */

  /** @DELETE POST */
}
