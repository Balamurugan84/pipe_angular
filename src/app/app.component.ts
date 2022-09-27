import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  day = new Date();

  name = 'bala';

  num = 123456.78;

  per = 0.56;

  obj ={name:'bala', age:'21'}

  arr =[1,2,3,4]
}
