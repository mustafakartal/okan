import { Component, OnInit } from '@angular/core';
import { Menu, MenuList } from 'src/app/models';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuList = [];

  constructor(private router: Router) {
    const menu = new Menu();
    menu.Icon = 'icon-home';
    menu.IsActive = true;
    menu.Link = '/';
    menu.Name = 'Ana Sayfa';
    menu.SortOrder = 0;

    const menu2 = new Menu();
    menu2.Icon = 'icon-wrench';
    menu2.IsActive = true;
    menu2.Link = '/projeler';
    menu2.Name = 'Projeler';
    menu2.SortOrder = 0;

    this.menuList.push(menu);
    this.menuList.push(menu2);

    router.events.subscribe((val: any) => {
      const value = val instanceof NavigationEnd;
      if (value == true) {
        this.setMenuClass();
      }
    });
  }

  ngOnInit() {
  }

  setMenuClass() {
    for (let i = 0; i < this.menuList.length; i++) {
      const currentMenu = this.menuList[i] as Menu;
      if (currentMenu.Link == '/' && this.router.url=='/') {
        currentMenu.IsActive = true;
      } else {
        if (currentMenu.Link!='/' && this.router.url.indexOf(currentMenu.Link) > -1) {
          currentMenu.IsActive = true;
        } else {
          currentMenu.IsActive = false;
        }
      }
    }
  }

  route(menu: Menu) {
    if (menu != null) {
      this.router.navigate([menu.Link]);
    }
  }

}
