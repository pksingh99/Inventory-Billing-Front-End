import { Injectable } from '@angular/core';

@Injectable()
export class LolService {

  constructor() { }
public islol:boolean=false;
public user:any='[{"utype":""}]';
public acc="";
public aname="";
public add="";
public ph="";
public wht="";
public username="";
public eid:any=null;
setLol(){
  this.islol=true;
}
getLol(){
  return this.islol;
}
setUser(user){
this.user=user;
}
setAname(aname){
this.aname=aname;
}
getAname(){
return this.aname;
}
setAdd(Add){
this.add=Add;
}
getEID(){
return this.eid;
}
setEID(eid){
this.eid=eid;
}
getAdd(){
return this.add;
}
setPhone(ph){
this.ph=ph;
}
getPhone(){
return this.ph;
}
setWhatsapp(whatsapp){
this.wht=whatsapp;
}
getWhatsapp(){
return this.wht;
}
setAcc(acc){
this.acc=acc;
}
getAcc(){
return this.acc;
}
getUser(){
  return this.user;
}
setUserName(n){
this.username=n;
}
getUserName(){
return this.username;
}
}
