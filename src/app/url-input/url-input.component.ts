import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.css']
})
export class UrlInputComponent {
  url: string = '';
  urlResponse: string = '';
  endpoint: string = ''

  constructor(private http: HttpClient) {
    this.endpoint = 'http://localhost:8080/api/v1/shorten';
  }
  
  submitUrl(url: string): void {
    this.http.post(this.endpoint, url, {
      headers: { 'Content-Type': 'text/plain' },
      responseType: 'text' 
    }).subscribe(
      (response) => {
        this.urlResponse = response;
      },
      (error) => {
        console.error('Erreur lors de la requête HTTP', error);
      }
    );
  }
}
