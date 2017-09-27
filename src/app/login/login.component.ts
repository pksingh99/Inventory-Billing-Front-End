import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private use:UserService) { }

  ngOnInit() {
  }

doSuccess()
{

this.use.doSuccess();

}




}
