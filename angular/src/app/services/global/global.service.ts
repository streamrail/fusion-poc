import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class GlobalService {
  public loading$ = new BehaviorSubject<boolean>(true);
  
  constructor(
    private _router: Router
  ) { }

  public set loading(isLoading: boolean) {
    this.loading$.next(isLoading);
  }

  redirectToPage(path: string, options?: any): Promise<boolean> {
    const routeCommand = [path];
    if (options && options.param) {
        routeCommand.push(options.param);
        delete options.param;
    }
    return this._router.navigate(routeCommand, options);
  }

  redirectToBase() {
    this.redirectToPage('/');
  }
}
