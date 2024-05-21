import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'table',
    pathMatch: 'full',
    loadChildren: () => import('./modules/table/table.module').then(m => m.TableModule)
  },
  {
      path: 'select-auto-complete',
      pathMatch: 'full',
      loadChildren: () => import('./modules/select-autocomplete/select-autocomplete.module').then(m => m.SelectAutocompleteModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutComponent,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
