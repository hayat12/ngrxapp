import { createAction, props } from "@ngrx/store";
import { Post } from "./post.model";

const POST_LIST = "[POST - NGRX - SELECTION] POST_LIST";
const POST_DELETE = "[POST - NGRX - SELECTION] POST_DELETE";
const POST_UPDATE = "[POST - NGRX - SELECTION] POST_UPDATE";
const POST_VIEW = "[POST - NGRX - SELECTION] POST_VIEW";
const POST_CREATE = "[POST - NGRX - SELECTION] POST_CREATE";
const POST_LOADING = "[POST - NGRX - LOADING] POST_LOADING";

export const createPost = createAction(
  POST_CREATE,
  props<{ id: number }>()
);

export const removePost = createAction(
  POST_DELETE,
  props<{ id: number }>()
);

export const listPost = createAction(
  POST_LIST,
  props<{ post: ReadonlyArray<Post> }>()
);
