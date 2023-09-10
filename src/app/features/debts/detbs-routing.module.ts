import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '@core/layout/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MainLayoutComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
          // { path: 'dashboard', component: WorkplacesDayPage },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DebtsRoutingModule {}
