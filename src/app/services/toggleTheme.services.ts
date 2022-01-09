import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ToggleThemeService {

  //  variable de estado de switch
  private statusSwitch: boolean = false;

  // Con output creamos el nuevo EventEmitter. De este objeto obtendremos los cambios.
  @Output()
  switchEmitter = new EventEmitter<boolean>();
  constructor() { }

  // cambio de estado de switch
  toggle() {
    this.statusSwitch = !this.statusSwitch;
    document.body.classList.toggle('dark');
    this.cambiosSwitch();

    return this.statusSwitch;
  }

  //consumir los cambios
  cambiosSwitch() {
    this.switchEmitter.emit(this.statusSwitch);
  }

}