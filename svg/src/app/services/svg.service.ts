import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SvgService {

  constructor(private http: HttpClient) {
  }

    getSvg() {
      return this.http.get('assets/template.svg', {responseType: 'text'});
    }
}
