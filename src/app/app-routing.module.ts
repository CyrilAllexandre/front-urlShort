import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlInputComponent } from './url-input/url-input.component';
import { UrlRetrieveComponent } from './url-retrieve/url-retrieve.component';
const routes: Routes = [{
  path: 'submit', component: UrlInputComponent
},
{path: 'retrieve', component: UrlRetrieveComponent}]


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
