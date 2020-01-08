import { Component, OnInit } from '@angular/core';
import { ShareTasksService } from '../share-tasks.service'
// import {AngularSplitModule} from 'angular-split'
@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  name;
  age;
  user;
  userAge;
  widgets = [];
  count = 0;
  constructor(private widgetServices: ShareTasksService) { }

  ngOnInit() {
  }
  addWidget(event) {
    const user = { user: this.name, userAge: this.age }
    this.widgets.push(user);
    this.count++;
    console.log(this.widgets);
  }
}
