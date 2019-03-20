import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Presentation } from '../models/presentation';
import { Slide } from '../models/slide';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SvgService {

  constructor(private http: HttpClient) {
  }

    getSvg() {
      return this.http.get('assets/template.svg', {responseType: 'text'});
    }

    getPresentations(): Observable<Presentation[]> {
      return this.http.get<Presentation[]>('http://localhost:8080/presentations');
    }

    getSlides(): Observable<Slide[]> {
      return this.http.get<Slide[]>(`http://localhost:8080/slides`);
    }
}
