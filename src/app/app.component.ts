import { Component } from '@angular/core';

@Component({
    selector: 'eh-app',
    template: `
    <div>
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mainNavbar" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="/" class="navbar-brand">{{pageTitle}}</a>
        </div>
        <div class="collapse navbar-collapse" id="mainNavbar">
          
          <ul class="nav navbar-nav navbar-right">
            <li><a href="locations">Locations</a></li>
            <li><a>Event Ideas</a></li>
            <li><a>Catering</a></li>
            <li><a>Login</a></li>
            <li><a class="btn btn-register">Sign up</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
    `
})
export class AppComponent { 
    pageTitle: string = 'Event Hub';
}
