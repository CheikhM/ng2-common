import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleDirective } from './directives/nc-toggle.directive';
import { MatDialogModule } from "@angular/material/dialog";
import { ConfirmationBoxModal } from './components/confirm-box/confirm-modal.component';
import { ConfirmBox } from './components/confirm-box/confirm-box-component';
@NgModule({
  declarations: [
    ToggleDirective,
    ConfirmationBoxModal,
    ConfirmBox,
  ],
  imports: [
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [
    ConfirmationBoxModal
  ],
  exports: [
    ToggleDirective,
    ConfirmBox,
  ]
})
export class Ng2CommnonModule { }
