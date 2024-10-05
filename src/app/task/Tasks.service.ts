import { Injectable } from "@angular/core";
import { NewTask } from "../interfaces/NewTask.interface";

@Injectable({providedIn:'root'})
export class TaskService {
 private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'learn Angular.js',
      dueDate: '2024-12-15',
      summary: "Learn Angular.js and it's Features",
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'learn Angular.js',
      dueDate: '2024-12-10',
      summary: "Learn Angular.js and it's Features",
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'learn Angular.js',
      dueDate: '2024-12-5',
      summary: "Learn Angular.js and it's Features",
    },
  ];

constructor(){
    const tasks=localStorage.getItem('tasks');

    if(tasks){
        this.tasks=JSON.parse(tasks);
    }
}

  getAllUserTask(userId:string){
    return this.tasks.filter((task)=>{
        return task.userId === userId;
    })
  }

  addTasks(taskData:NewTask,userId:string){
     console.log('Adding Task:', taskData);
     this.tasks.unshift({
       id: new Date().getTime().toString(),
       userId: userId,
       title: taskData.title,
       summary: taskData.summary,
       dueDate: taskData.date,
     });
     this.saveTask();
  }

  removeTask(id:string){
     this.tasks.filter((task)=>{
        return task.id!==id;
    })
    this.saveTask();
  }

  private saveTask(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}