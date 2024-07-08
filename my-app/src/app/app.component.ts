import { Component, HostBinding, signal, ViewChild } from '@angular/core';
import { Comp1Component } from './comp-1/comp-1.component';
import { Observable, Subject } from 'rxjs';
import { ApiserviceService } from './comp-1/apiservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private httpCall: ApiserviceService) { }
  @ViewChild(Comp1Component) child;
  show;
  stringValue = 'abcdefg'
  select = 'Five'
  sign = signal('init value');
  ishow = true;
  intoggle = true;
  pink;
  ngOnInit() {
    this.httpCall.apiCall().subscribe(e => this.show = e)
  }
  onred() {
    this.pink = 'red'
  }
  ongold() {
    this.pink = 'gold'
  }
  ontoggle() {
    this.intoggle = !this.intoggle;
  }


  onClicked() {
    this.ishow = !this.ishow;
    // this.sign.set('React js and Angular ')
  }

  ngAfterViewInit() {
    // console.log(this.child.count);
    // this.child.obs$.subscribe(c => console.log(c))
    // console.log(this.child.count);
    // this.child.sub$.subscribe(e => console.log('this is from subject', e))
    // this.child.newFun(50)
    // this.child.apiCall().subscribe(e => console.log(e))
  }
  ngAfterViewChecked() {
    // this.child.newFun(90)

  }
}
