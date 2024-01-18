import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-notarius';
  isSubmitPage: boolean = false;
  isRetrievePage: boolean = false;
  urlResponse: string = '';
  endpoint: string = ''

  constructor(private router: Router) {

  }

  ngDoCheck() {
    this.isSubmitPage = false;
    this.isRetrievePage = false;
    
    if (this.router.url === '/submit') this.isSubmitPage = true;
    if (this.router.url === '/retrieve') this.isRetrievePage = true;
  }

}