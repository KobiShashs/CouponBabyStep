import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  typesOfAction: string[] = ['Get All Customers', 'Get All Coupons', 'Update 123', 'Delete 123'];
  constructor() { }

  ngOnInit(): void {
  }

}
