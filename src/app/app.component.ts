import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy.user';
import { TaskComponent } from "./task/task.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users=DUMMY_USERS;

  selectedUserId?:string;

  get selectedUser(){
    return this.users.find((user)=>{
      return user.id===this.selectedUserId;
    })!;
  }


  onSelectUser(id:string){
   return this.selectedUserId=id;
  }
}
