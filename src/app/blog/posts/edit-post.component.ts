import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { BasePost } from './base-post';
import { PostService } from './services/post.service';
import { selectApp } from '../../state/app.selector'
import { AppState } from 'src/app/state/app.model';
import { selectPosts } from './state/post.selector'

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./posts.component.scss']
})
export class EditPostComponent extends BasePost implements OnInit {
  id:string = "";
  constructor(
    private route:ActivatedRoute,
    private store:Store,
    protected service:PostService) { super(service)}

  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
   this.store.select(selectApp).subscribe((o:AppState)=>{
    if(o && o.data !=null) {this.id = o.data;}
    this.getPost(this.id);
   })
  }


  getPost(id:string):void{
    this.store.select(selectPosts);
  }
}
