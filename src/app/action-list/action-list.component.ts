import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { ActionService } from '../../services/action.service';
import { Action } from '../../models/action.model';


@Component({
  selector: 'app-action-list', 
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss'] 
})

export class ActionListComponent implements OnInit {
  @Input() filter: string = ''; // Input property for filtering
  filteredActions: Action[] = []; // Array to hold filtered actions
  actions: Action[] = []; // Array to hold all actions

  actionFilter: string = ''; // Search term for filtering
  selectedFilter: string = 'name'; // Default filter term

  constructor(private actionService: ActionService) { } // Constructor with ActionService injection
  
  // Lifecycle hook, called after the component is initialized
  ngOnInit(): void {
    this.actions = this.actionService.getActions(); // Fetch actions from the service
  }

  markAsSuccess(index: number): void {
    this.actions[index].success = true; // Mark action as successful
  }

  removeAction(index: number): void {
    this.actions.splice(index, 1); // Remove action from the list
  }

  startModify(index: number): void {
    this.actions[index].isModifying = true; // Set the modifying flag to true
  }

  saveChanges(index: number): void {
    this.actions[index].isModifying = false; // Set the modifying flag to false
    const modifiedAction = this.actions[index];
    this.actionService.modifyAction(index, modifiedAction); // Save modified action through the service
  }

  getFilteredActions(): Action[] {
    if (this.filter.trim() === '') {
      return this.actions; // If no filter, return all actions
    }

    const lowerCaseFilter = this.filter.toLowerCase(); // Convert filter to lowercase
    return this.actions.filter(
      (action) =>
        action.name.toLowerCase().includes(lowerCaseFilter) || // Filter based on name
        action.objective.toLowerCase().includes(lowerCaseFilter) || // Filter based on objective
        action.responsible.toLowerCase().includes(lowerCaseFilter) // Filter based on responsible
    );
  }
}
