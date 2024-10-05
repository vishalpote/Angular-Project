import {
  Component,
  computed,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy.user';
import { User } from '../interfaces/User.interface';

//another apporoch to define the type of user

// type User={
//   id:string,
//   name:string,
//   avatar:string
// }

//this is the third apporoch to define the the type of user

//or 

// you can create a seperate file for the interface and the type and add into this file

// interface User{
//   id:string,
//   name:string,
//   avatar:string
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  //this is the first approach

  // @Input({required:true}) user!:{
  //   id:string,
  //   name:string,
  //   avatar:string
  // }

  
  //this is second approach to define the type of user
  @Input({required:true}) user!:User;
  @Input ({required:true}) selected!:boolean
  @Output() select=new EventEmitter();

  imagePath=computed(()=>"assets/users/"+this.user.avatar);
  // get imagePath(){
  //   return 'assets/users/'+this.avatar
  // }

  onSelectUser(){
    this.select.emit(this.user.id);
  
  }
}
