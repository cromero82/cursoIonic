import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private httpClient: HttpClient) { }

  verNoticias(): Observable <any> {
    return this.httpClient.get<any>('https://localhost:44373/api/noticias');
  }
}
