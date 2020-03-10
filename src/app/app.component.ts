import { Component, OnInit } from '@angular/core';

import { PoMenuItem, PoNavbarItem, PoNavbarIconAction } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public user = {
    username: 'Víctor Cândido',
    email: 'victor.candido@iv2.com.br'
  };

  readonly navbarActions: Array<PoNavbarIconAction> = [
    { label: 'Notificações', icon: 'po-icon-notification' },
  ];

  readonly navbarItems: Array<PoNavbarItem>;

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', shortLabel: 'Home', icon: 'po-icon-home', link: '' },
    { label: 'Calendário', shortLabel: 'Calendário', icon: 'po-icon-calendar', link: '' },
    { label: 'Matérias', shortLabel: 'Matérias', icon: 'po-icon-book', link: '' },
    { label: 'Painel de controle', shortLabel: 'Controle', icon: 'po-icon-settings', link: '' }
  ];

  ngOnInit() {

  }

}
