import { Component, inject, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/Task.interface';
import { NewTaskComponent } from '../../new-task/new-task.component';
import { CommonModule,DatePipe } from '@angular/common';
import { TaskService } from '../Tasks.service';
@Component({
  selector: 'app-task2',
  standalone: true,
  imports: [NewTaskComponent, CommonModule, DatePipe],
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.css',
})
export class Task2Component {
  @Input() task!: Task;
  private taskService=inject(TaskService);

  onCompletedTask() {
    this.taskService.removeTask(this.task.id);
    console.log(`${this.task.id} is completed..!!`);
  }
}
