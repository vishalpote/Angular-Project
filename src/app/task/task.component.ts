import { Component, Input, inject } from '@angular/core';
import { Task2Component } from './task2/task2.component';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from '../new-task/new-task.component';
import { NewTask } from '../interfaces/NewTask.interface';
import { TaskService } from './Tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [Task2Component, CommonModule, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  taskAdding = false;
  private taskService=inject(TaskService);



  get selectedUserTasks() {
    return this.taskService.getAllUserTask(this.userId);
  }

  // onCompletTask(id: string) {
  //   return this.taskService.removeTask(id);
  // }

  addTasks() {
    this.taskAdding = true;
  }

  onCancleTask() {
    this.taskAdding = false;
  };

 
}
