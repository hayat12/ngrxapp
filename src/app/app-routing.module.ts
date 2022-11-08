import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule, Routes, NoPreloading } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'blog',
    loadChildren: ()=>import('src/app/blog/blog.module').then(m=>m.BlogModule)
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: "404"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {useHash: true, preloadingStrategy:NoPreloading})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export class MyErrorHandler implements ErrorHandler {
  handleError(error:any) {
    console.log("Hello Error", error);
  }
}
