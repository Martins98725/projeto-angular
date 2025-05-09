import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { CommonModule } from '@angular/common';
import { TemplateBindComponent } from './components/template/template-bind/template-bind.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NewComponentComponent,
    CommonModule,
    TemplateBindComponent,
    TemplateVariablesComponent,
  ],
  template: `
    <!-- <router-outlet /> -->
    <h1>Curso de angular</h1>
    <app-template-bind />
    <app-new-component />
    <app-template-variables />
  `,
})
export class AppComponent {}

// <router-outlet />
