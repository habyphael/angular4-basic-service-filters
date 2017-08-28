import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { LocationComponent } from './location/location.component';
import { LocationService } from './location/location.service';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    FormsModule, 
    RouterModule.forRoot([
    { path: 'welcome', component: WelcomeComponent },
    { path: 'locations', component: LocationComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
  ])],
  declarations: [ AppComponent, WelcomeComponent, LocationComponent ],
  bootstrap: [ AppComponent ],
  providers: [ LocationService]
})
export class AppModule { }
