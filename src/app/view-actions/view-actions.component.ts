import { Component, Input } from '@angular/core';
import { Action } from '../../models/action.model';

@Component({
  selector: 'app-view-actions',
  templateUrl: './view-actions.component.html',
  styleUrls: ['./view-actions.component.scss']
})
export class ViewActionsComponent {
  @Input() filter: string = '';
  filteredActions: Action[] = [];
  actions: Action[] = [];

  actionFilter: string = ''; // Search term
  selectedFilter: string = 'name'; // Default filter term

  // Update the filter based on the selected term and search term
  updateFilter(): void {
    if (this.actionFilter.trim() === '') {
      this.filteredActions = [...this.actions];
      return;
    }

    const lowerCaseFilter = this.actionFilter.toLowerCase();

    this.filteredActions = this.actions.filter((action) => {
      const value = (action as any)[this.selectedFilter];
      return (
        value !== undefined &&
        String(value).toLowerCase().includes(lowerCaseFilter)
      );
    });
  }

}
