
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  templateUrl: './url-retrieve.component.html',
  styleUrls: ['./url-retrieve.component.css']
})
export class UrlRetrieveComponent {
  url: string = '';
  urlResponse: string = '';
  endpoint: string = ''

  constructor(private http: HttpClient) {
    this.endpoint = 'http://localhost:8080/api/v1/lengthen';
  }
  
  retrieveUrl(url: string): void {
    this.http.post(this.endpoint, url, {
      headers: { 'Content-Type': 'text/plain' },
      responseType: 'text' 
    }).subscribe(
      (response) => {
        this.urlResponse = response;
      },
      (error) => {
        if (error.status === 404) {
          this.urlResponse ='No full URL were found with this URL';
        } else {
          console.error('An error occured during HTTP request', error);
        }
      }
    );
  }

  
  copy() {
    let textToCopy = document.getElementById('response')?.innerHTML;
    navigator.clipboard.writeText(textToCopy ?? '')
    alert('Copied')
  }
}