import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement} from '@angular/elements'

import { CustomCompComponent } from './custom-comp/custom-comp.component';

@NgModule({
  declarations: [
    CustomCompComponent,
    CustomCompComponent
  ],
  entryComponents: [CustomCompComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const vasMap = createCustomElement(CustomCompComponent, { injector });
    customElements.define('ng-native-ele', vasMap);
  }

  ngDoBootstrap() {}
}

