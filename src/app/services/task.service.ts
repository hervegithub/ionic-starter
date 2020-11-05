import { Injectable } from '@angular/core';
import { TasksModel } from "../models/tasks.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskList: TasksModel[];

  constructor() {
    this.taskList =
      [
        { taskId: 1, taskTitle: "learn html", taskDescription: "Learn html on openclassroom. With mey friends of devc douala.", taskDate: "Jun 17, 2005 11:06", isDone: false },
        { taskId: 2, taskTitle: "learn Javascript", taskDescription: "Learn javascript on openclassroom. With mey friends of devc douala.", taskDate: "Jun 17, 2005 11:06", isDone: true },
      ]
  }

  onGetAllTask() {
    return new Promise((resolve, reject) => {
      resolve(this.taskList)
    });
  }


  getTaskById(id: number) {
    return new Promise((resolve, reject) => {
      this.taskList.forEach((task: TasksModel) => {
        if (task.taskId === id) {
          resolve(task);
        } else {
          reject('Task not found');
        }
      })
    });
  }

  addNewTask(task: TasksModel) {
    return new Promise((resolve, reject) => {
      let vale = this.taskList.unshift(task);
      resolve('task is added');
    });
  }

  deleteTaskById(taskPosition: number, taskId: number) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < this.taskList.length; i++) {
        if (this.taskList[i].taskId === taskId) {
          this.taskList = this.taskList.splice(i, 1);
          resolve('Task is delate');
        } else {
          reject('task not found');
        }
      }
    });
  }


}
