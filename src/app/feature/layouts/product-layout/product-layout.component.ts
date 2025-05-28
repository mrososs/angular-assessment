import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../../../system/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../../system/components/footer/footer.component';
import { SidebarComponent } from '../../../system/components/sidebar/sidebar.component';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';

@Component({
  selector: 'app-product-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    RouterOutlet,
    LoaderComponent
  ],
  templateUrl: './product-layout.component.html',
  styleUrl: './product-layout.component.scss',
})
export class ProductLayoutComponent {
  isSidebarOpen = signal(true);
  toggleSidebar() {
    this.isSidebarOpen.update((value) => !value);
  }
}
