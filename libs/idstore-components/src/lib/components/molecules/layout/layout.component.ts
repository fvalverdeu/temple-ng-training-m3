import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdsSessionService } from '@idstore/commons/services/session/session.service';

@Component({
  selector: 'ui-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class UiLayoutComponent implements OnInit {

  @Input() title: string;

  constructor(
    private sessionService: IdsSessionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.sessionService.logout();
    this.router.navigateByUrl('/');
  }

}
