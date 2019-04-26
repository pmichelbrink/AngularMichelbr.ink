import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeOneComponent } from './home-one.component';
import { HomeTwoComponent } from './home-two.component';
import { HomeBlogComponent } from './home-blog.component';
import { AllSectionsComponent } from './all-sections.component';
import { DemoComponent } from './demo/demo.component';

export const HomeRoutes: Routes = [
  { path: 'one', component: HomeOneComponent },
  { path: 'two', component: HomeTwoComponent },
  { path: 'all', component: AllSectionsComponent },
  { path: 'demos', component: DemoComponent },
  //{ path: 'blog', component: HomeTwoComponent },
  { path: 'blog', component: HomeBlogComponent },
  { path: '', component: HomeComponent }
];