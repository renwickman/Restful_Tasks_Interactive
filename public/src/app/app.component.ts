import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: any;

  tasktoshow: any;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getTasksFromService();
    this.tasktoshow = 0;
  }
  getTasksFromService(){
    console.log("Got our tasks!")
    var tasks_observable = this._httpService.getTasks();
    tasks_observable.subscribe(data => {
      console.log(data)
      this.tasks = data["task"]
      });
  }
  onButtonClick(event) {
    console.log(`Click event is working, event:`, event);
    this.getTasksFromService();
  }

  getDescriptionFromService(id){
    console.log("Got our description")
    var desc_observable = this._httpService.getTask(id);
    desc_observable.subscribe(data => {
      console.log(data);
      this.tasktoshow = data.task[0]
    });
  }
  onDescriptionClick(id){
    this.getDescriptionFromService(id);
  }

}
