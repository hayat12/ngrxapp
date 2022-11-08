import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { PostHeader } from "./header/post-base-header";
import { PostService } from "./services/post.service";

export class BasePost extends PostHeader {
  isEdit:boolean=false;
  constructor(protected _service:PostService){
    super();
  }
}
