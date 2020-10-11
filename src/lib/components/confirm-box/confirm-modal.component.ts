import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmData } from '../../models/confirm.model';

@Component({
  template: `
    <div>
        {{ data?.message }}
    </div>
    <div>
      <button mat-button mat-dialog-close cdkFocusInitial>{{ data?.deny }}</button>
      <button mat-button [mat-dialog-close]="true">{{ data?.confirm }}</button>
    </div>
  `,
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmationBoxModal {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmData){}
}
