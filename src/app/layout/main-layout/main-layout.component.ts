import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarContainerComponent } from '../../features/sidebar/sidebar-container/sidebar-container.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, SidebarContainerComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
