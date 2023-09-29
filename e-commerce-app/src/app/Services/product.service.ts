import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'        // In order to make reques to apior backend we have to use HTTPClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ProductService {
  private apiUrl = "https://fakestoreapi.com/products";

  constructor(private http:HttpClient) { }       /// This is the point where we create Instance of Http 

  getProducts():Observable<any>{              // In order to receive data from api we have to use Observable
    return this.http.get(`${this.apiUrl}`);       /// get request
  }

}
