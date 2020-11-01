import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {TaskService} from "../services/task.service";
import {TasksModel} from "../models/tasks.model";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  task:TasksModel;
  constructor(private modalCtrl: ModalController, private taskService:TaskService) {
    this.task = {
      taskId:0,
      taskTitle:"",
      taskDescription:"",
      taskDate:"",
      isDone:false,
    }
  }

  onCloseModal(){
    this.modalCtrl.dismiss();
  }

  onAddTask(){
    this.taskService.addNewTask(this.task)
        .then((response:string) =>{
          alert(response);
          this.onCloseModal();
        })
  }

  ngOnInit() {
  }

}
