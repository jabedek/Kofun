import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

const trackBy = (_: number, __: any): string => ``;
type TrackFn = typeof trackBy;

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export abstract class BaseComponent implements OnDestroy {
  readonly __destroy = new Subject<void>();

  __trackByFn(collectionName: string): TrackFn {
    return (index: number, _: any) => `${collectionName}-${index}`;
  }

  ngOnDestroy(): void {
    this.__destroy.next();
    this.__destroy.complete();
  }
}
