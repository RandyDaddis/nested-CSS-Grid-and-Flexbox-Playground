import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../_services/customerService';
import { Customer } from '../_models/customer';

@Component({
  selector: 'app-nested-css-grids-0',
  templateUrl: './nested-css-grids-0.component.html',
  styleUrls: ['./nested-css-grids-0.component.scss']
})
export class NestedCssGrids0Component implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }

}
