import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { createPost, listPost, removePost } from './post.action';
import { Post } from './post.model';

export const initialState: ReadonlyArray<Post> = [];

export const postsReducer = createReducer(
  initialState,
  on(listPost, (state, { post }) => post),
  on(removePost, (state, { id }) => state.filter((id) => id !== id)),
  on(createPost, (state, { id }) => {
    if(state.length > 0) return state
    return state
  })
);
