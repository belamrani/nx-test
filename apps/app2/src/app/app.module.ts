import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import {Lib1Module} from '@nx-test/lib1';

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), Lib1Module],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
