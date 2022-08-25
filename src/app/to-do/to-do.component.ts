import { toDos } from './toDos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  toDos : toDos[] = []                //store all the todos
  currentContent: string = '';       //the current todo
  todoId : number = 0;              //counter
  isButtonVisible : boolean = true;

  constructor() {}

  ngOnInit(): void {}  

  addToDo()
  { 
    if(this.currentContent)
    {
      this.todoId++;

      let newTodo = new toDos();             //temp object
      newTodo.content = this.currentContent;
      newTodo.id = this.todoId;
      
      this.toDos.push(newTodo);
      this.currentContent = '';
    }
    else{
      alert("Hey dude, you didn't enter anything!!")
    }
  }

  deleteToDo(id: any)
  {
    /*for(let i = 0; i < this.toDos.length; i++)
    {
      if(this.toDos[i].id == id)
      { 
        delete this.toDos[i];
      }
    }*/
    this.todoId--;
    this.toDos = this.toDos.filter((v,i) => i!=id);
  }
}
