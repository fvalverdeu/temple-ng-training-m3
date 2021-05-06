import { Component, OnInit } from '@angular/core';
import { MenuOption } from '@idstore/commons/interfaces/menu-option.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  menuOptions: MenuOption[] = [
    { icon: 'inventory-2', title: 'Productos', url: '/admin/products' },
    { icon: 'inventory-2', title: 'Categorías', url: '/admin/categories' },
    { icon: 'inventory-2', title: 'Fabricantes', url: '/admin/makers' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
