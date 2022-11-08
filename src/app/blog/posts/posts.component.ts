import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { routeAction } from 'src/app/state/app.action';
import { AppState } from 'src/app/state/app.model';
import { EditPostComponent } from './edit-post.component';
import { PostService } from './services/post.service';
import { listPost } from './state/post.action';
import { Post } from './state/post.model';
import { selectPosts } from './state/post.selector';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:Post[] = [];
  posts$ = this.store.select(selectPosts);

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private _service: PostService,
    private store:Store) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((o)=>{
      console.log(o);
    })
    this.loadPost();
  }

  loadPost(){
    this._service
      .getPosts()
      .subscribe((post) =>{
        this.store.dispatch(listPost({ post }));
      });
  }

  edit(id:number):void{
    this.router.navigate(['./',id], {relativeTo: this.route,state: {id}});
    let app = {data: id, route: '', loading:true}
    // this.store.dispatch(routeAction({app}))
   }

}
