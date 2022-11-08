import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Post } from "./post.model";

export const selectPosts = createFeatureSelector<ReadonlyArray<Post>>('post');
export const selectCollectionState = createFeatureSelector<ReadonlyArray<Post>>('post');

export const selectBookCollection = createSelector( selectPosts, selectCollectionState,
  (posts, collection) => {
    return collection.map((post) => posts.find((_post) => _post.id === post.id));
  }
);

// export const selectPostById = createSelector('post', id, (id))
