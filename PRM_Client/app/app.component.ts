import { Component } from '@angular/core';
import { LoginFormComponent } from './app.loginComponent'

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <login></login>
  `
})
export class AppComponent { name = 'Angular'; author:string="Sandeep Sharma"}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/