import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grocery } from '../model_dir/Grocery';
import { GroceriesReponse } from '../model_dir/GroceriesResponse';
import { ToileteriesResponse } from '../model_dir/ToileteriesResponse';

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {  

  private apiUrl = "http://localhost:8080/household/product"
  // Replace with your actual API URL
  _groceries:string = "/groceries"
  _toileteries:string = "/toileteries"
  
  constructor(private http: HttpClient) { }

  getGroceries(sortBy:string): Observable<GroceriesReponse> {
    console.log("Calling Groceries API")
    let params = new HttpParams().set('sortBy', sortBy);
    return this.http.get<GroceriesReponse>(this.apiUrl.concat(this._groceries), { params });
  }

  getToileteries(sortBy:string): Observable<ToileteriesResponse> {
    console.log("Calling Toiletries API")
    let params = new HttpParams().set('sortBy', sortBy);
    return this.http.get<ToileteriesResponse>(this.apiUrl.concat(this._toileteries), { params });
  }

  // getOrderById(id: string): Observable<Order> {
  //   return this.http.get<Order>(`${this.apiUrl.concat(this.view_order)}/${id}`);
  // }
}
