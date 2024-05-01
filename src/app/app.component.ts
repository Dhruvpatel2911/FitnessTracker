import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'healthclub';

  showHeaderFooter: boolean = false;
  showOfferWindow: boolean = false;


  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        const routes: Array<string> = ['/login', '/register'];
        if (routes.includes(event['url'])) {
          this.showHeaderFooter = false;
        } else {
          this.showHeaderFooter = true;
        }
      }
    });
  }
}

