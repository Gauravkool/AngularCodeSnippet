import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CreateSnippetComponent } from './components/create-snippet/create-snippet.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { ViewSnippetComponent } from './components/view-snippet/view-snippet.component';
import { DeferrableDemoComponent } from './components/deferrable-demo/deferrable-demo.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'create',
    component: CreateSnippetComponent,
    canActivate: [authGuard],
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  { path: '', component: HomeComponent },
  { path: 'demo', component: DeferrableDemoComponent },
  { path: 'snippet/:id', component: ViewSnippetComponent },
  { path: '**', component: NotfoundComponent },
];
