import { Component, Input } from '@angular/core';
import { Action } from '../../models/action.model';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {
  
  @Input() filter: string = ''; // Input property for filtering
  filteredActions: Action[] = []; // Array to store filtered actions
  actions: Action[] = []; // Array to store all actions

  actionFilter: string = ''; // Search term for filtering
  selectedFilter: string = 'name'; // Default filter term

  // Method to update the filter based on the selected term and search term
  updateFilter(): void {
    if (this.actionFilter.trim() === '') {
      this.filteredActions = [...this.actions]; // If search term is empty, set filtered actions to all actions
      return;
    }

    const lowerCaseFilter = this.actionFilter.toLowerCase(); // Convert search term to lowercase

    this.filteredActions = this.actions.filter((action) => {
      const value = (action as any)[this.selectedFilter]; // Get the value of the selected filter term
      return (
        value !== undefined &&
        String(value).toLowerCase().includes(lowerCaseFilter)
      );
    });
  }
}
