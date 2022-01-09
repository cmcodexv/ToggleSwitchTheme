import { Component, OnInit, HostListener } from '@angular/core';
import { ToggleThemeService } from '../../services/toggleTheme.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private themeService: ToggleThemeService
  ) { }

  public btnSwitch: boolean = false;
  
  ngOnInit(): void {
  }

  changeTheme() {
    this.btnSwitch = this.themeService.toggle();
  }



}
