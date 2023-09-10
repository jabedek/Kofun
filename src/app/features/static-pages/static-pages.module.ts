import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { WrongPageComponent } from './wrong-page/wrong-page.component';
import { RegulationsPageComponent } from './regulations-page/regulations-page.component';
import { StaticPagesRoutingModule } from './static-pages-routing.module';

@NgModule({
  declarations: [LandingPageComponent, ContactPageComponent, AboutPageComponent, WrongPageComponent, RegulationsPageComponent],
  imports: [CommonModule, StaticPagesRoutingModule],
  exports: [LandingPageComponent, ContactPageComponent, AboutPageComponent, WrongPageComponent, RegulationsPageComponent],
})
export class StaticPagesModule {}
