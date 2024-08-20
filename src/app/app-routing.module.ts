import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { ViewueachserComponent } from './viewueachser/viewueachser.component';
import { ViewlocationComponent } from './location/viewlocation/viewlocation.component';
import { EditlocationComponent } from './location/editlocation/editlocation.component';
import { AddlocationComponent } from './location/addlocation/addlocation.component';
import { ViewunitComponent } from './Unit/viewunit/viewunit.component';
import { LandingpageComponent } from './public/landingpage/landingpage.component';
// import { TestComponent } from './public/test/test.component';
import { AddUnitComponent } from './Unit/add-unit/add-unit.component';
import { UserProfileComponent } from './User/user-profile/user-profile.component';
import { AdministrativeActionsOnUnitsComponent } from './Unit/administrative-actions-on-units/administrative-actions-on-units.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ViewEachUnitComponent } from './Unit/view-each-unit/view-each-unit.component';


const routes: Routes = [

  { path:'register', component: RegisterComponent, title:'register' },
  { path: 'sign-in', component: SignInComponent, title: `signin` },
  { path:'view-users', component:ViewusersComponent, title: 'view-users' },
  { path:`view-user/:id`, component: ViewueachserComponent, title: 'view-user' },
  { path:`view-location`, component:ViewlocationComponent, title: `view-location` },
  { path:`edit-location/:id`, component:EditlocationComponent, title: `edit-location` },
  { path:`add-location`, component: AddlocationComponent, title: `add-location` },
  { path:`view-unit`, component: ViewunitComponent, title: `view-unit` },
  { path:`homepage`, component:LandingpageComponent, title: `homepage` },
  { path: `add-unit`, component: AddUnitComponent, title: `add-unit` },
  { path: `user-profile`, component: UserProfileComponent, title: `user-profile` },
  { path: `edit-unit/:id`, component: AdministrativeActionsOnUnitsComponent, title: `edit-unit` },
  { path: `book-unit/:id`, component: ViewEachUnitComponent }
  // { path: `test`, component: TestComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
