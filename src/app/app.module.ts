import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './sidebar/about/about.component';
import { ContactComponent } from './sidebar/contact/contact.component';
import { ContentComponent } from './content/content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fas, faPhoneAlt, faCity, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    AboutComponent,
    ContactComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
	FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
   constructor(){
      library.add(faCoffee,fas,faPhoneAlt,far,faCity,faEnvelope,fab,faGithub,faSkype);
   }
}
