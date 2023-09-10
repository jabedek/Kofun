import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainLayoutComponent } from '@core/layout/components/main-layout/main-layout.component';

export const staticPagesRoutes: Routes = [
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
  imports: [RouterModule.forChild(staticPagesRoutes)],
  exports: [RouterModule],
})
export class StaticPagesRoutingModule {}
