import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public listaItems: any[] = [
    { name: 'Home', url: 'home' },
    { name: 'Login', url: 'login' },
    { name: 'Promesas', url: 'promesas' },
    { name: 'Observables', url: 'observables' },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
