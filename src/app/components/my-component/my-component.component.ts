import { Component } from '@angular/core';
import { MyServiceService } from '../../services';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  constructor(private myService: MyServiceService){}
}
