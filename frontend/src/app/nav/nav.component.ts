import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  links: { title: string; url: string }[] = [
    { title: 'Home', url: '/' },
    { title: 'Users', url: '/users' },
  ];
}
