import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

export class PostHeader{
  createForm(): void{
    const form  = new FormGroup(
      {
        id: new FormControl('',[]),
        title: new FormControl('',[]),
        body: new FormControl('',[]),
        userId: new FormControl('',[])
      }
    )
  }
}
