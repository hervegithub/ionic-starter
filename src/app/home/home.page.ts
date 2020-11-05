import { Component } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {AddTaskPage} from "../add-task/add-task.page";
import {TasksModel} from "../models/tasks.model";
import {TaskService} from "../services/task.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  taskList:TasksModel[];
  isSearchBarIsVisible : boolean = false;

  constructor(private modalCtrl: ModalController, private taskService:TaskService) {
      this.taskList = [];
      this.taskService.onGetAllTask().then((tasks:TasksModel[]) => {
          this.taskList = tasks;
      });
  }

  onShowSearchBar(){
    this.isSearchBarIsVisible = !this.isSearchBarIsVisible;
  }

  onCancelSearch(){
    this.onShowSearchBar();
  }


  async onShowModal(){
    let modal = await this.modalCtrl.create(
        {
          component:AddTaskPage,
          cssClass: 'my-custom-modal-css'
        }
    );
    modal.present();
  }



}
