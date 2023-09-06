import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesX } from '@static/static-pages-routing.module';

const routes: Routes = [
  ...routesX,
  // {
  //   path: '',

  //   // canActivate: [AuthGuard],
  //   loadChildren: () => import('@static/static-pages.module').then((m) => m.StaticPagesModule),
  // },

  {
    path: 'account',
    // canActivate: [AuthGuard],
    loadChildren: () => import('@features/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'fundraiser',
    // canActivate: [AuthGuard],
    loadChildren: () => import('@features/fundraiser/fundraiser.module').then((m) => m.FundraiserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
