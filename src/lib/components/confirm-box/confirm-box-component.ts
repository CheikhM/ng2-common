import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmationBoxModal } from './confirm-modal.component';
import { ConfirmData } from '../../models/confirm.model';
@Component({
  selector: 'nc-confirm',
  template: ``
})
export class ConfirmBox implements OnInit {

  @Input() trigger: any;
  @Input() data: ConfirmData;
  @Output() confirm = new EventEmitter<boolean>();
  @Output() deny = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog) {}
  ngOnInit(){
    this.trigger.addEventListener('click', () => {
      this.show().subscribe(action => {
        if(action) {
          this.confirm.emit(action);
        } else {
          this.deny.emit(action);
        }
      })
    });
  }

  show(): Observable<boolean> {
    return this.dialog.open(ConfirmationBoxModal, {
      data: this.data,
      panelClass: 'nc-modal'
    }).afterClosed();
  }
}

