import { Injectable } from '@angular/core';
import { Action } from '../models/action.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  // Array to store actions
  actions: Action[] = [];

  constructor() { }

  // Get all actions
  getActions(): Action[] {
    return this.actions;
  }

  // Create a new action
  createAction(newAction: Action): void {
    console.log(newAction);
    this.actions.push(newAction);
    
    // Note: The next line was commented out; uncomment it if you want to use BehaviorSubject
    // this.actionsSubject.next([...this.actions]);

    const obj: String = this.actions[0].name;
    console.log("Hello from service.createAction" + obj);
  }

  // Delete an action by index
  deleteAction(index: number): void {
    this.actions.splice(index, 1);
  }

  // Modify an action by index with a new action
  modifyAction(index: number, modifiedAction: Action): void {
    this.actions[index] = modifiedAction;
  }
  
}
