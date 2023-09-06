import { Component } from '@angular/core';
import { BaseComponent } from '@shared/components/base-component/base-component.component';

@Component({
  selector: 'app-main-layout',
  template: `
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <div class="wrapper">
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
  `,
})
export class MainLayoutComponent extends BaseComponent {}
