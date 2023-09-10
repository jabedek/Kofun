import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { staticPagesRoutes } from '@features/static-pages/static-pages-routing.module';

const routes: Routes = [
  ...staticPagesRoutes,
  {
    path: 'account',
    // canActivate: [AuthGuard],
    loadChildren: () => import('@features/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'fundraising',
    // canActivate: [AuthGuard],
    loadChildren: () => import('@features/fundraising/fundraising.module').then((m) => m.FundraisingModule),
  },
  {
    path: 'debts',
    // canActivate: [AuthGuard],
    loadChildren: () => import('@features/debts/debts.module').then((m) => m.DebtsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
