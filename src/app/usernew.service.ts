import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/Rx';


@Injectable()

export class Auth {
    isLoggedIn:boolean = false;
    logIn$: Subject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn);
    externalBS;

    constructor() {
        this.logIn$.asObservable();
        this.externalBS = this.logIn$;
    }


    login(id_token) {
        window.localStorage.setItem('id_token',id_token);
        this.isLoggedIn = true;
        this.logIn$.next(this.isLoggedIn);
    }


    logout() {
        window.localStorage.setItem('id_token','');
        this.isLoggedIn = false;
    }

    check() {
        return this.externalBS.asObservable().startWith(this.isLoggedIn);
    }

}
