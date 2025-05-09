import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.css'
})
export class TemplateVariablesComponent implements AfterViewInit {

  @ViewChild('name') public nameInput!:ElementRef;
  ngAfterViewInit(): void {
      
  }

}
