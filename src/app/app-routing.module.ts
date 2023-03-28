import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, ContactComponent, HomeComponent } from './components';


const routes: Routes =
  [
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "contact", component: ContactComponent },
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
