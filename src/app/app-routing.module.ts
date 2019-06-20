import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './sidebar/about/about.component';
import { ContactComponent } from './sidebar/contact/contact.component';
import { ContentComponent } from './content/content.component';



const appRoutes: Routes = [
    { path: '', component: ContentComponent, pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent }

];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule {

}