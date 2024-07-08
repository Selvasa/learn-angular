import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-comp-1',
  templateUrl: './comp-1.component.html',
  styleUrl: './comp-1.component.css'
})
export class Comp1Component {
  count = 0;
  sub$ = new Subject();
  obs$ = new Observable(e => {
    e.next(10)
  });
  newFun(val) {
    this.sub$.next(val);
  }

}

@Component({
  selector: 'home-comp',
  template: "<h2>This is Home Component</h2><hr>",
})
export class HomeComp { }

@Component({
  selector: 'home-child',
  template: `<h2>This is Empty Component</h2>`,
})
export class HomeChildComp { }

@Component({
  selector: 'about-comp',
  template: "<h2>This is About Component</h2>",
})
export class AboutComp { }

@Component({
  selector: 'help-comp',
  template: "<h2>This is Help Component</h2>",
})
export class HelpComp { }

@Component({
  selector: 'help-child',
  template: "<h2>This is Type Error Component</h2>",
})
export class HelpChildComp { }
