import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Action } from '../../models/action.model';
import { ActionService } from '../../services/action.service';
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent  {
  actionForm!: FormGroup; // Form group for action details

  // Constructor with FormBuilder and ActionService injection
  constructor(private fb: FormBuilder, private actionService: ActionService) {
    this.createForm(); // Call the method to create the form
  }

  // Method to create the form with form controls and validators
  createForm() {
    this.actionForm = this.fb.group({
      inputActionName: ['', Validators.required], // Action name with required validator
      inputResponsible: ['', Validators.required], // Responsible with required validator
      inputObjectif: ['', Validators.required], // Objective with required validator
      inputDate: ['', [Validators.required, Validators.min(1)]], // Date with required and minimum value validators
      inputNbPres: ['', Validators.required] // Number of beneficiaries with required validator
    });
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.actionForm.valid) {
      const newAction = this.actionForm.value; // Get form values
      console.log('Action créée avec succès'); // Log success message
      console.log(newAction); // Log new action details

      // Create a new Action instance and add it to the service
      this.actionService.createAction(new Action(
        newAction.inputActionName,
        newAction.inputObjectif,
        newAction.inputResponsible,
        newAction.inputNbPres,
        newAction.inputDate
      ));

      // Reset the form if necessary
      this.actionForm.reset();
    }
  }

  // Method to mark action as success
  markAsSuccess(): void {
    if (this.actionForm.valid) {
      this.actionForm.patchValue({ success: true }); // Patch the form to mark success
    }
  }


}
