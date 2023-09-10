import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundraiserModule } from './fundraiser/fundraiser.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FundraiserModule],
  exports: [FundraiserModule],
})
export class FundraisingModule {}
