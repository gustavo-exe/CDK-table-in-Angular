import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<aside class=" bg-gray-100 px-1 pb-1 pt-2 bottom-0 relative " style="height: calc(100vh - 48px);" >
    <button class="absolute -right-3" >
     <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" stroke-width="1.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM10.9697 16.0303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L10.9697 7.96967C11.2626 7.67678 11.7374 7.67678 12.0303 7.96967C12.3232 8.26256 12.3232 8.73744 12.0303 9.03033L9.81066 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H9.81066L12.0303 14.9697C12.3232 15.2626 12.3232 15.7374 12.0303 16.0303C11.7374 16.3232 11.2626 16.3232 10.9697 16.0303Z" fill="#000000"></path></svg>
    </button>
    <ng-container *ngFor="let item of rutas">
      <button
        [routerLink]="['/'+item.path]"
        [ngClass]="{'text-blue-500': item.path === ruta}"
        class="font-bold px-1 py-2  w-full min-w-24 text-left" >
        {{item.title}}
      </button>
    </ng-container>

  </aside>`
})
export class SidebarComponent {

  ruta: string = '';
  rutas = [
    {
      path: 'table',
      title: 'Table'
    },
    {
      path: 'select-auto-complete',
      title: 'Select auto complete'
    }
  ]

  constructor(private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe((event) => {
      this.ruta = this.router.url.toString().split('/')[1]
    });
  }

}
