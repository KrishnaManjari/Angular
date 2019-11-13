import { Component, OnInit, ElementRef } from '@angular/core';
import { Key } from 'protractor';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import { ShareTasksService} from '../share-tasks.service'

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.scss']
})
export class FocusComponent implements OnInit {
 tasksData;
 dateValue;
 dateRetrieve;
 dat;
  constructor(private focus:ElementRef, private taskServices:ShareTasksService) { }

  ngOnInit() {
    
  }
  dateSelection() {
    this.dateRetrieve = new Date(this.dateValue).toString().split(' ');
    if(this.dateRetrieve[2]==1  || this.dateRetrieve[2]==21 || this.dateRetrieve[2]==31){
      this.dat='st';
    }
    else if(this.dateRetrieve[2]==2 || this.dateRetrieve[2]==22 )
    {
      this.dat='nd';
    }
    else if(this.dateRetrieve[2]==3  || this.dateRetrieve[2]==23){
      this.dat='rd';
    }
    else
    this.dat='th';
    this.dateRetrieve = this.dateRetrieve[0]+","+" " + this.dateRetrieve[1] +" "+ this.dateRetrieve[2]+ this.dat;
    this.tasksData = JSON.parse(localStorage.getItem(this.dateRetrieve));
  }
  edit(event){
    if(event){
      var content = event.path[1].children;
      content[1].style.display = "none";
      content[2].style.display = "block";
    }
  }
  editDone(event){
    var content = event.path[1].children;
    content[1].textContent = content[2].value;
    content[1].style.display = "block";
    content[2].style.display = "none";
    this.tasksData[parseInt(event.path[1].children[0].id)] = content[1].textContent;
    localStorage.setItem(this.dateRetrieve,JSON.stringify(this.tasksData));
  }
  delete(event){
    var a=parseInt(event.path[1].children[0].id);
    this.tasksData.splice(a, 1);
    var b = JSON.stringify(this.tasksData);
    localStorage.setItem(this.dateRetrieve, b);
  }
  tick(event){
    var tickText = parseInt(event.path[1].children[0].id);
    if(this.tasksData[tickText] === event.path[1].children[1].innerText){
      event.path[1].children[1].style.textDecoration = "line-through";
    }
  }
}
