import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BasePost } from './base-post';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./posts.component.scss']
})
export class CreatePostComponent extends BasePost implements OnInit {
  constructor(protected service:PostService) {
    super(service);
  }

  ngOnInit(): void {
    this.createForm();
  }

}
