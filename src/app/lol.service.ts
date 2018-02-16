import { Injectable } from '@angular/core';

@Injectable()
export class LolService {

  constructor() { }
public islol:boolean=false;
public user='[{"utype":""}]';
setLol(){
  this.islol=true;
}
getLol(){
  return this.islol;
}
setUser(user){
this.user=user;
}

getUser(){
  return this.user;
}
}
