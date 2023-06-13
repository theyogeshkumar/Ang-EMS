import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ang-EMS';

childCond:boolean = false;
childCond1:boolean = false;

  openChild1()
  {
    this.childCond=!this.childCond;
  }
  openChild2()
  {
    this.childCond1=!this.childCond1;
  }
}
