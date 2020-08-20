import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/Customer';
import { CustomersService } from '../../services/customers.service'
@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {

  public customers: Customer[];
  public constructor(private customersService: CustomersService) { }

  ngOnInit(): void {

    this.customersService.getAllCustomers().subscribe(
      (customers) => { this.customers = customers },
      (err) => { alert(err.message)});
  }

}
