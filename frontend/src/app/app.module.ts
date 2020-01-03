import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule, MatOptionModule,
  MatRadioModule, MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule, MatStepperModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxGraphModule} from '@swimlane/ngx-graph';
import {CookieService} from 'ngx-cookie-service';
import {DabsLoginComponent} from './dabs-login.component';
import {DabsHomeComponent} from './dabs-home.component';
import {DabsSignupComponent} from './dabs-signup.component';
import {DabsRecommendComponent} from './dabs-recommend.component';
import {DabsPlaygroundComponent} from './dabs-playground.component';
import {DabsMainComponent} from './dabs-main.component';
import { UrlToStatePipe } from './pipes/url-to-state.pipe';
import { DabsAccountComponent } from './dabs-account.component';
import { NgTerminalModule } from 'ng-terminal';


@NgModule({
  declarations: [
    AppComponent,
    DabsLoginComponent,
    DabsHomeComponent,
    DabsSignupComponent,
    DabsRecommendComponent,
    DabsPlaygroundComponent,
    DabsMainComponent,
    UrlToStatePipe,
    DabsAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,
    MatExpansionModule,
    NgxGraphModule,
    NgTerminalModule,
    MatStepperModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
