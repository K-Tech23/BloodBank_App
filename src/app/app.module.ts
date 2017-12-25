import { AuthguardGuard } from './authguard.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {SuperAdminComponent} from './super-admin/super-admin.component';
import { SuperadminService } from "./super-admin/super-admin.component.service";
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';
import { RecieverComponent } from './reciever/reciever.component';
import { DonorslistComponent } from './donorslist/donorslist.component';
import { RecieverslistComponent } from './recieverslist/recieverslist.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { RecprofComponent } from './recprof/recprof.component';
import { DonprofComponent } from './donprof/donprof.component';
import { MainComponent } from './main/main.component';
import { BloodStockComponent } from './blood-stock/blood-stock.component';
import { DonprofstructComponent } from './donprofstruct/donprofstruct.component';

import { UserService } from "./user.service";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuperAdminComponent,
    AdminComponent,
    SignupComponent,
    RecieverComponent,
    DonorslistComponent,
    RecieverslistComponent,
    AdminlistComponent,
    RecprofComponent,
    DonprofComponent,
    MainComponent,
    BloodStockComponent,
    DonprofstructComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //ngx-bootstrap
    CarouselModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'reciever',
        component: RecieverComponent
      },
      {
        path: 'admin',
        canActivate:[AuthguardGuard],
        component: AdminComponent,
        children:[
          { path: 'arecieverslist',
          component: RecieverslistComponent
        },
          { path: '',
          component: DonorslistComponent
        },
        { path: 'bloodstock',
        component: BloodStockComponent
      },
        ]
      },
      {
        path: 'superadmin',
        canActivate:[AuthguardGuard],
        children:[
          { path: '',
          component: AdminlistComponent
        },
          { path: 'srecieverslist',
          component: RecieverslistComponent
        },
          { path: 'sdonorslist',
          component: DonorslistComponent
        },

        ],
        component: SuperAdminComponent
      },
      {
        path: 'recieverslist',
        component: RecieverslistComponent
      },
      {
        path: 'donorslist',
        component: DonorslistComponent
      },
      {
        path: 'adminlist',
        component: AdminlistComponent
      },
      {
        path: 'donprofstruct',
        canActivate:[AuthguardGuard],
        children:[
          {
            path: '',
            component: DonprofComponent
        },
          {
            path: 'dadminlist',
            component: AdminlistComponent
        } 
        ],
        component: DonprofstructComponent
      },
      {
        path: 'donprof',
        component: DonprofComponent
    },
      {
        path: 'recprof',
        component: RecprofComponent
      },
      {
        path: '',
        component: MainComponent
      }
    ])
  ],
  providers: [SuperadminService,UserService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
