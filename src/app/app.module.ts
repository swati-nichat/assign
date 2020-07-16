import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {LoginDataComponent} from './login-data/login-data.component';
 import {RouterModule } from '@angular/router';
 import {MatMenuModule} from '@angular/material/menu';
 import {HttpClientModule } from '@angular/common/http';
 import {MatExpansionModule} from '@angular/material/expansion';
 import { InfiniteScrollModule } from 'ngx-infinite-scroll';
 import {MatCardModule} from '@angular/material/card';
 import {MatGridListModule} from '@angular/material/grid-list';
 import { FormsModule } from '@angular/forms';
 import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { AuthGuardServiceService } from './auth-guard-service.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginDataComponent,
    //JokeFilterPipe
  ],
  imports: [
    InfiniteScrollModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatToolbarModule
  ],
  providers: [UserService,AuthGuardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }



