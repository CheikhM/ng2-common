import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleDirective } from './directives/nc-toggle.directive';
@NgModule({
  declarations: [
    ToggleDirective
  ],
  imports: [
    BrowserAnimationsModule,
  ],
  exports: [
    ToggleDirective,
  ]
})
export class Ng2CommnonModule { }
