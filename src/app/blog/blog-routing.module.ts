import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './posts/create-post.component';
import { EditPostComponent } from './posts/edit-post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: "posts",
    component: PostsComponent,
    children: [
      {
        path: "",
        component: CreatePostComponent
      },
      {
        path: ":id",
        component: EditPostComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: "../404"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, FormsModule, ReactiveFormsModule]
})
export class BlogRoutingModule { }
