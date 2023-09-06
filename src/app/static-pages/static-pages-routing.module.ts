import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '@layout/components/main-layout/main-layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routesX: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: LandingPageComponent },
    ],
  },
  {
    path: '**',
    children: [
      {
        path: '',
        component: MainLayoutComponent,
        // children: [{ path: '', component: WrongPage }],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesX)],
  exports: [RouterModule],
})
export class StaticPagesRoutingModule {}
