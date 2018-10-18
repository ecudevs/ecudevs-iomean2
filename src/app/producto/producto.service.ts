import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: any;

  constructor(private http: Http) { }

  get() {
    return this.http.get('/api/productos/')
      .pipe(map((response: Response) => response.json()));
  }

  insert(producto) {
    return this.http.post('/api/productos/', producto)
      .pipe(map((response: Response) => response.json()));
  }

  update(producto) {
    return this.http.put('/api/productos/', producto)
      .pipe(map((response: Response) => response.json()));
  }

  private jwt() {

    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = new Headers({ 'x-access-token': chasker.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
