import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createLogin } from '../state/login/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private store:Store) { }

  form = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  ngOnInit(): void {
    console.log("")
  }

  login(){
    const {username, password} = this.form.getRawValue();
    if(this.form.invalid) return this.form.markAllAsTouched();
    try {
      const data = {
        username: username+"",
        password: password+""
      }
      this.store.dispatch(createLogin({login: {...data}}))
    } catch (error) {
      throw(error);
    }
  }

}
