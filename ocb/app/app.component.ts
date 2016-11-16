import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>OneClick Budget</h1>
    <a routerLink='' RouterLinkActive="active">Home</a>
    <router-outlet></router-outlet>
    `
})
export class AppComponent { }
