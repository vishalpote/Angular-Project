import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { NewTask } from '../interfaces/NewTask.interface';
import { TaskService } from '../task/Tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({required: true}) userId!:string;
  @Output() close = new EventEmitter<void>();
  private taskService=inject(TaskService);

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.close.emit();
  }

  onSubmit(){
    console.log('form submitted..!!');
    console.log(this.enteredTitle);
    console.log(this.enteredSummary);
    this.taskService.addTasks(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
