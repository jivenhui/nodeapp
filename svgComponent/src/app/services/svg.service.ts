import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SvgService {

  constructor(private http: HttpClient) { }

  getSvg() {
    return this.http.get('assets/html.html', {responseType: 'text'});
  }
}
