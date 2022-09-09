import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output-together',
  templateUrl: './input-output-together.component.html',
  styleUrls: ['./input-output-together.component.css']
})
export class InputOutputTogetherComponent {

  @Input() item = '';
  @Output() deleteRequest = new EventEmitter<string>();

  lineThrough = '';

  delete() {
    console.warn('Child says: emitting item deleteRequest with', this.item);
    this.deleteRequest.emit(this.item);
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }
}
