import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {SearchComponent} from './components/search/search.component';
import {MaterialModule} from './material.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './components/home/home.component';
import {ResultsComponent} from './components/results/results.component';
import {RouteResolverService} from './core/services/resolvers/route-resolver.service';
import {HttpService} from './core/services/http/http.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {IframePipePipe} from './core/pipes/iframe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchComponent,
    HomeComponent,
    ResultsComponent,
    IframePipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
