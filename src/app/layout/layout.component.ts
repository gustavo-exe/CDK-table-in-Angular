import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [SidebarComponent],
  template: `
  <div>
    <header class=" py-3 px-2 bg-gray-100 flex justify-between" >
      <h1 class=" font-bold" >CDK Custom</h1>
      <button class="block lg:hidden" >
      <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 5H21" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12H21" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 19H21" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </button>
    </header>
    <div class="grid grid-cols-[auto,1fr]" >
      <sidebar/>
      <div  class=" overflow-auto" style="height: calc(100vh - 48px)" >
        <ng-content ></ng-content>
      </div>
    </div>
  </div>
  `,
})
export class LayoutComponent {

}
