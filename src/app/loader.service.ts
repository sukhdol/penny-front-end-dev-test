import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { delay, switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _isLoading$ = new BehaviorSubject<boolean>(false);

  isLoading$: Observable<boolean> = this._isLoading$.pipe(
    switchMap(isLoading => {
        if (!isLoading) {
          return of(false);
        }
        return of(true).pipe(delay(1000));
    })
  );

  constructor() { }

  start(): void {
    this._isLoading$.next(true);
  }

  finish(): void {
    this._isLoading$.next(false);
  }
}
