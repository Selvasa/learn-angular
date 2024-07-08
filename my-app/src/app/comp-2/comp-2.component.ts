import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-2',
  template: '<h2 class="primary">app-comp-2</h2>',
  styles: ['.primary{color:red}']
})
export class Comp2Component {
  @Input('names') names;
  constructor() {

  }
  ngAfterViewInit() {

    console.log(this.names);
  }
}
