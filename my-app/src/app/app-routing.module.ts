import { NgModule } from '@angular/core';
import { provideRoutes, RouterModule, Routes } from '@angular/router';
import { AboutComp, Comp1Component, HelpChildComp, HelpComp, HomeChildComp, HomeComp } from './comp-1/comp-1.component';

const routes: Routes = [
  { path: 'app', component: Comp1Component },
  { path: 'home', component: HomeComp },
  { path: 'about', component: AboutComp, },
  { path: 'help', component: HelpComp },
  { path: '', component: HomeChildComp },
  { path: 'type-error', component: HelpChildComp },
  { path: '**', redirectTo: 'type-error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
