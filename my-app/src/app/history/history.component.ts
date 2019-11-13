import { Component, OnInit } from '@angular/core';
import { ShareTasksService } from '../share-tasks.service'
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  tasksTable =[];
  date;
  dataUrl;
  mf ={
    data:[]
  }
  rows = [
    { name: 'Rahul', gender: 'Male', company: 'Swimlane' },
    { name: 'Ankit', gender: 'Male', company: 'KFC' },
    { name: 'Neha', gender: 'Female', company: 'Burger King' }
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];
  constructor(private taskServices: ShareTasksService) { }

  ngOnInit() {
    this.tasksTable = this.taskServices.taskServices;
  }
  fileReader(event){
    var input = event.target.files[0];
    var reader = new FileReader();
    reader.readAsText(input,"UTF-8");
    reader.onload = () =>{
      this.dataUrl = reader.result;
      this.dataUrl = JSON.parse(this.dataUrl);
      this.rows = this.dataUrl.dataTable;
      this.columns = [
        { prop: 'name' },
        { name: 'Gender' },
        { name: 'Company' }
      ];
    };
  }

}
