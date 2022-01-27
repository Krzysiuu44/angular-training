import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'schwarzmuller';

  display0 = false
  display1 = false
  onPress0() {
    this.display0 = true;
    setTimeout(() => {
      this.display0 = false;
    }, 3000)
  }
  onPress1() {
    this.display1 = true;
    setTimeout(() => {
      this.display1 = false;
    }, 3000)
  }
}
