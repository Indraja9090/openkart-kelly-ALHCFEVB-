import { Component } from '@angular/core';
import { Order } from '../order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  orders: Order[] = [
    new Order("ORD123A", "Y 81"),
    new Order("ORD123B", "APPLE 14"),

  ]

}
