import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { PostsComponent } from './posts/posts.component';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './posts/state/post.redurce';
import { EffectsModule } from '@ngrx/effects';
import { PostEffect } from './posts/state/post.effect';
import { CreatePostComponent } from './posts/create-post.component';
import { EditPostComponent } from './posts/edit-post.component';


@NgModule({
  declarations: [
    PostsComponent,
    CreatePostComponent,
    EditPostComponent
  ],
  imports: [
    StoreModule.forFeature("post", postsReducer),
    EffectsModule.forFeature([PostEffect]),
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
