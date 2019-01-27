import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../_services/customerService';
import { Customer } from '../_models/customer';

@Component({
  selector: 'app-nested-css-grids-1',
  templateUrl: './nested-css-grids-1.component.html',
  styleUrls: ['./nested-css-grids-1.component.scss']
})
export class NestedCssGrids1Component implements OnInit {
  customers: Customer[];
  listHeader = ['Customer', 'Invoices', 'Payments'];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }
}

