import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'angular-alert-module';
import { ShareTasksService} from '../share-tasks.service';
@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.scss']
})
export class MyTaskComponent implements OnInit {
  task = 'What are your five most important things you do today?';
    myValue;
    listItems =[];
    item;
    dateStamp;
    date;
    dateTime;
    dat;
  constructor(private alerts: AlertsService, private taskServices:ShareTasksService ) { }

  ngOnInit() {
    this.dateStamp= new Date();
    this.date = this.dateStamp.toString().split(' ');
    if(this.date[2]==1  || this.date[2]==21 || this.date[2]==31){
      this.dat='st';
    }
    else if(this.date[2]==2 || this.date[2]==22 )
    {
      this.dat='nd';
    }
    else if(this.date[2]==3  || this.date[2]==23){
      this.dat='rd';
    }
    else
    this.dat='th';
    this.dateTime = this.date[0]+","+" " + this.date[1] +" "+ this.date[2]+" "+ this.dat;
    if(localStorage.getItem(this.dateTime)){
      this.listItems = JSON.parse(localStorage.getItem(this.dateTime));
    }
  }
  addTask(event) : void{
    if(event.keyCode == 13){
      // console.log(this.myValue);
      if(this.myValue!=""){
        if(localStorage.getItem(this.dateTime)){
          this.listItems.push(this.myValue);
        } else{
          this.listItems =[];
          this.listItems.push(this.myValue);
        }
        this.item = JSON.stringify(this.listItems);
        localStorage.setItem(this.dateTime,this.item);
        alert("Task added Sucessfully");
        if(this.taskServices){
          if(this.taskServices.taskServices.some(e => e.date == this.dateTime)){
            this.taskServices.taskServices.splice(this.taskServices.taskServices.findIndex(e => e.date == this.dateTime), 1);
            this.taskServices.taskServices.push({"date":this.dateTime, "items": this.listItems});
          } else{
            this.taskServices.taskServices.push({"date":this.dateTime, "items": this.listItems});
          }
        }
      }else{
        alert("Please Enter your task");
      }
      this.myValue = "";
    }
  }
  
  previous() {
    this.dateStamp.setDate(this.dateStamp.getDate()-1);
    this.date = this.dateStamp.toString().split(' ');
    if(this.date[2]==1  || this.date[2]==21 || this.date[2]==31){
      this.dat='st';
    }
    else if(this.date[2]==2 || this.date[2]==22 )
    {
      this.dat='nd';
    }
    else if(this.date[2]==3  || this.date[2]==23){
      this.dat='rd';
    }
    else
    this.dat='th';
    this.dateTime = this.date[0]+","+" " + this.date[1] +" "+ this.date[2]+" "+ this.dat;
    if(localStorage.getItem(this.dateTime)){
      this.listItems = JSON.parse(localStorage.getItem(this.dateTime));
    }
  }

  next() {
    this.dateStamp.setDate(this.dateStamp.getDate()+1);
    this.date = this.dateStamp.toString().split(' ');
    if(this.date[2]==1  || this.date[2]==21 || this.date[2]==31){
      this.dat='st';
    }
    else if(this.date[2]==2 || this.date[2]==22 )
    {
      this.dat='nd';
    }
    else if(this.date[2]==3  || this.date[2]==23){
      this.dat='rd';
    }
    else
    this.dat='th';
    this.dateTime = this.date[0]+","+" " + this.date[1] +" "+ this.date[2]+" "+this.dat;
  }
}

