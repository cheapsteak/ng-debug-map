import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <button (click)="onClick()">click</button>
      {{ map | json }}
    </div>
  `,
  styles: [`
    
  `]
})
export class AppComponent {
  map = new Map();

  onClick () {
    this.map.set({'a':Math.random()}, {[Math.random()]: {'a':Math.random()}})
    console.log(this.map);
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/