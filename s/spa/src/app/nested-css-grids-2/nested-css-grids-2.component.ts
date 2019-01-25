import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../_services/customerService';
import { Customer } from '../_models/customer';

@Component({
  selector: 'app-nested-css-grids-2',
  templateUrl: './nested-css-grids-2.component.html',
  styleUrls: ['./nested-css-grids-2.component.scss']
})

export class NestedCssGrids2Component implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }

}
