import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
 text:string="siva"
  ngOnInit(): void {
  }
  handleRoute(){
    const queryParams = { key1: 'value1', key2: 'value2' };
      this.router.navigate(["/sign-up"], { queryParams: queryParams })
      // this.router.navigate(["/sign-up",2,3])
  }
  handleLogin(){
    localStorage.setItem("login","ok")
  }

}
