import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../models/Customer';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  public constructor(private httpClient: HttpClient) { }


  public getAllCustomers(): Observable<Customer[]>{
  return this.httpClient.get<Customer[]>('../../../assets/json/customers.json', { withCredentials: true });
}
}
