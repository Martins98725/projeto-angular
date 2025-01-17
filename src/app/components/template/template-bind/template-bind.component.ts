import { Component } from '@angular/core';

@Component({
  selector: 'app-template-bind',
  standalone: true,
  imports: [],
  templateUrl: './template-bind.component.html',
  styleUrl: './template-bind.component.css'
})
export class TemplateBindComponent {
  public name = "Dener Troquatte";
  public age = 20;
  public condition = this.age > 1 ? "é maior" : "é menor";
  public isDisabed = false;
  public isTextDecoration = this.age >= 20 ? 'underline' : 'none';

  public sum(valor1: number, valor2: number){
    return valor1 + valor2
  }

}
