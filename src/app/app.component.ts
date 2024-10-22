import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponentComponent, CommonModule],
  template: `
    <!-- <router-outlet /> -->
    <h1>Curso de angular</h1>
    <app-new-component/>
  `,
})
export class AppComponent {}

// <router-outlet />
