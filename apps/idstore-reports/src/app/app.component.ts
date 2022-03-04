import { Component } from '@angular/core';
import { MenuOption } from '@idstore/commons/interfaces/menu-option.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'idstore-reports';
  menuOptions: MenuOption[] = [
    { icon: 'inventory-2', title: 'Productos', url: '/' },
    { icon: 'inventory-2', title: 'Categorías', url: '/admin/categories' },
    { icon: 'inventory-2', title: 'Fabricantes', url: '/admin/makers' },
    { icon: 'inventory-2', title: 'Tareas', url: '/todo' },
  ];
}
