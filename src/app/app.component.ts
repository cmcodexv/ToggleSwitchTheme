import { Component } from '@angular/core';
import { ToggleThemeService } from './services/toggleTheme.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  //data of cards
  public appCards = [
    {
      title: 'Learn Angular',
      url: 'https://angular.io/tutorial',
      icon: 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z'
    },
    {
      title: 'CLI Documentation',
      url: 'https://angular.io/cli',
      icon: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z'
    },
    {
      title: 'Angular Blog',
      url: 'https://blog.angular.io/',
      icon: 'M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z'
    }

  ];

  //data of cards
  public appSmallCards = [
    {
      title: 'New Component',
      value: 'component'
    },
    {
      title: 'Angular Material',
      value: 'material'
    },
    {
      title: 'Add PWA Support',
      value: 'pwa'
    },
    {
      title: 'Add Dependency',
      value: 'dependency'
    },
    {
      title: 'Run and Watch Tests',
      value: 'test'
    },
    {
      title: 'Build for Production',
      value: 'build'
    }

  ];

  //btn switch
  public btnSwitch: boolean = false;

  constructor(
    private themeService: ToggleThemeService
  ) { }

  title = 'ToggleSwitchTheme';


  ngOnInit(): void {
    // Nos suscribimos al Emitter del servicio que habíamos declarado con @Output,
    // y le decimos que btnSwitch sera lo que nos devuelva el observable de switchEmitter
    this.themeService.switchEmitter.subscribe(
      data => {
        this.btnSwitch = data;
      }
    );
  }


}
