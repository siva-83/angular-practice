import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from 'src/app/footer/footer.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { HomeComponent } from 'src/app/components/home/home/home.component';
const routes: Routes = [{
  path:"",
  children:[
    { path: "", component: HomeComponent },
    {path:"header",component:HeaderComponent},
{path:"footer",component:FooterComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
