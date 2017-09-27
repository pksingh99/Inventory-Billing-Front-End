import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {Router} from "@angular/router";
import {UserService} from "./user.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private user:UserService,private route:Router){

  }
  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
      if(this.user.getAuth()==true){
      this.route.navigate(['/login']);
      console.log("ffff"+this.user.getAuth())

        return true;
    }
      else{
        console.log("ffff"+this.user.getAuth())
        this.route.navigate([]);
          return false;
      }

  }
}
//Observable<boolean>|Promise<boolean>|boolean
