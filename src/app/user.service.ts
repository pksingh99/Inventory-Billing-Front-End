import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
public aut:boolean=true;
  constructor() { }
doSuccess(){this.aut=false;
console.log(this.aut);}
getAuth(){

  return this.aut;
}
}
