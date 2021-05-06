import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdsSessionService } from '@idstore/commons/services/session/session.service';

@Component({
  selector: 'ids-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class IdsLayoutComponent implements OnInit {

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
