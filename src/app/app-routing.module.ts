import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'civilian', loadChildren: './civilian/civilian.module#CivilianPageModule' },
  { path: 'police', loadChildren: './police/police.module#PolicePageModule' },
  { path: 'bike', loadChildren: './bike/bike.module#BikePageModule' },
  { path: 'qr', loadChildren: './qr/qr.module#QRPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
