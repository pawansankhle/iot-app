import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Observer } from 'rxjs/Observer';

/**
 * This class implements a guard for routes that require that user is not authenticated.
 */
@Injectable()
export class AnonymousGuard implements CanActivate {
  /**
   * Constructor of the class.
   *
   * @param {authService} authService
   * @param {Router}      router
   */
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  /**
   * Purpose of this guard is check that current user has not been authenticated to application. If user is
   * authenticated he/she is redirected to profile page.
   *
   * @param {ActivatedRouteSnapshot}  route
   * @param {RouterStateSnapshot}     state
   * @returns {Observable<boolean>}
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return new Observable<boolean>((observer: Observer<boolean>) => {
      if (!this.authService.isAuthenticated()) {
        observer.next(true);
        observer.complete();
      } else {
        this.router
          .navigate(['/home'])
          .then(() => {
            observer.complete();
          });

        observer.next(false);
      }
    });
  }
}
