import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material-module';

@NgModule({
  imports: [CommonModule, NgbModule, FormsModule, MaterialModule],
  declarations: [],
  exports: [CommonModule, FormsModule, NgbModule, MaterialModule],
})
export class SharedModule {}
