import {
  Component,
  OnInit,ViewChild
} from '@angular/core';

import {HomeComponent} from '../home/home.component'
/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/test2290/es6-promise-loader for more info
 */

console.log('`Detail` component loaded asynchronously');

@Component({
  selector: 'detail',
  styles:[
    `.button {
      background-color: #00838F; /* Green */
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      margin: 4px 2px;
      cursor: pointer;
  }
  
  .button1 {font-size: 10px;}
  .button2 {font-size: 12px;}
  .button3 {font-size: 16px;}
  .button4 {font-size: 20px;}
  .button5 {font-size: 24px;}
  
  
  `
  ],
  template: `
   
   <h2>E-Bus-Ticket</h2>
  <small>Make it Simple</small>
    <form>
    <h2>Login</h2>
    <div class="form-group">
      <label for="phone">Phone:</label>
      <input type="phone" class="form-control" id="phone" [(ngModel)]="phone" placeholder="Enter phone" name="phone">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" [(ngModel)]="password" placeholder="Enter password" name="pwd">
    </div>
    <div class="checkbox">
      <label><input type="checkbox" name="remember"> Remember me</label>
    </div>
    <a [routerLink]=" ['../home'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
       
      <button type="submit"  class="button button3">Submit</button>
      </a>
  </form>
<br><br>

<form>
  <h2>Signup</h2>
    <div class="form-group">
      <label for="phone">Phone:</label>
      <input type="phone" class="form-control" id="phone" [(ngModel)]="phone1" placeholder="Enter phone" name="phone">
    </div>
    <div class="form-group">
      <label for="pwd" class="button button3">Password:</label>
      <input type="password" class="form-control" id="pwd" [(ngModel)]="password1" placeholder="Enter password" name="pwd">
    </div>
    <div class="checkbox">
      <label><input type="checkbox" name="remember"> Remember me</label>
    </div>
    <button type="submit" (click)="Signup()" class="btn btn-default">Submit</button>
  </form>
    <router-outlet></router-outlet>
  `,
})
export class DetailComponent implements OnInit {
  @ViewChild(HomeComponent) child;

  public ngOnInit() {
    console.log('hello `Register Details` component');
  }
  private phone="";
  private password="";

  Login(){

  }
  Signup(){

  }
}
