import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grocery } from '../model_dir/Grocery';
import { GroceriesReponse } from '../model_dir/GroceriesResponse';

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {  

  private apiUrl = "http://localhost:8080/household/product"
  // Replace with your actual API URL
  _groceries:string = "/groceries"
  
  constructor(private http: HttpClient) { }

  getGroceries(): Observable<GroceriesReponse> {
    console.log("insied service")
    return this.http.get<GroceriesReponse>(this.apiUrl.concat(this._groceries));
  }

  // getOrderById(id: string): Observable<Order> {
  //   return this.http.get<Order>(`${this.apiUrl.concat(this.view_order)}/${id}`);
  // }
}
