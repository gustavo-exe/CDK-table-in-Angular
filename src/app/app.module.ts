import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdkTableModule } from "@angular/cdk/table";
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from './shared/paginator/paginator.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CdkTableModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
