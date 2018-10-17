import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivadorGuard implements CanActivate {

  // Simulamos que tenemos una sesion para nuestro aplicativo
  isLogged = false;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // El valor booleano que se retorno desde este guard va a determinar si un usuario:
    // puede entrar o no en una ruta, o salir o no de una ruta
    return this.isLogged;
  }
}
