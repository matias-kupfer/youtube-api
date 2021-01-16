import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import {HomeComponent} from './components/home/home.component';
import {ResultsComponent} from './components/results/results.component';
import {RouteResolverService} from './core/services/resolvers/route-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'results/:search', component: ResultsComponent, resolve: {results: RouteResolverService} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
