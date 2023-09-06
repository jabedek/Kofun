import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
// import { layoutFeatureKey as featureKey, layoutState as featureState } from '../../core/store/layout/layout.reducers';
// import { SharedModule } from '@shared/shared.module';
// import { EffectsModule } from '@ngrx/effects';
// import { LayoutEffects } from '../../core/store/layout/layout.effects';

@NgModule({
  declarations: [MainLayoutComponent, FooterComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    // StoreModule.forFeature(featureKey, featureState),
    // EffectsModule.forFeature([LayoutEffects]),
  ],
  exports: [MainLayoutComponent],
})
export class LayoutModule {}
