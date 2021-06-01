import { Component, OnInit, Input } from '@angular/core';
import { MenuOption } from '@idstore/commons/interfaces/menu-option.interface';

@Component({
  selector: 'ui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class UiMenuComponent implements OnInit {

  @Input() menuOptions: MenuOption[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
