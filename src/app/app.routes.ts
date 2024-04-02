import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PartspageComponent } from './resourcepages/partspage/partspage.component';
import { ResourcesComponent } from './resourcepages/resources/resources.component';
import { StartpageComponent } from './resourcepages/startpage/startpage.component';
import { StorypageComponent } from './storypages/storypage/storypage.component';

export const routes: Routes = [
    {'path': '', 'title': 'Home', component:HomepageComponent },
    {'path': 'start', 'title': 'Start', component:StartpageComponent },
    {'path': 'resources', 'title': 'Resources', component:ResourcesComponent },
    {'path': 'parts', 'title': 'Parts', component:PartspageComponent },
    {'path': 'story', 'title': 'Story', component:StorypageComponent },
];
