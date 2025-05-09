import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-bind',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-bind.component.html',
  styleUrl: './template-bind.component.css',
})
export class TemplateBindComponent {
  public name = 'Dener Troquatte';
  public age = 20;
  public condition = this.age > 1 ? 'é maior' : 'é menor';
  public isDisabed = false;
  public isTextDecoration = this.age >= 20 ? 'underline' : 'none';

  public sum() {
    console.log(this.age);
    return this.age++;
  }

  public sub() {
    console.log(this.age);

    return this.age--;
  }

  public onKeyDown(event: Event) {
    return console.log(event);
  }

  public onMouseEvent(event: MouseEvent) {
    return console.log({
      clientx: event.clientX,
      clientY: event.clientY,
    });
  }
}
