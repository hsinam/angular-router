import { Route } from '@angular/router';
import { Topic01Component } from 'src/app/topic01/topic01.component';
import { Topic02Component } from 'src/app/topic02/topic02.component';
import { HomeComponent } from 'src/app/home/home.component';
import { Topic03Component } from 'src/app/topic03/topic03.component';
import { TesterGuard } from 'src/app/tester.guard';

export const ROUTES: Route[] = [
  {
    path: 'topic01/:param',
    component: Topic01Component
  },
  {
    path: 'topic02',
    component: Topic02Component
  },
  {
    path: 'topic03',
    component: Topic03Component,
    canActivate: [TesterGuard]
  },
  {
    path: '**',
    component: HomeComponent
  }
];
