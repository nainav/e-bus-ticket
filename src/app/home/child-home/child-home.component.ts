import {
  Component,
  OnInit,
} from '@angular/core';
/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/test2290/es6-promise-loader for more info
 */

console.log('`ChildHome` component loaded asynchronously');

@Component({
  selector: 'child-home',
  template: `
    <h1>Hello from Child Home</h1>
  `,
})
export class ChildHomeComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `ChildHome` component');
  }

}
