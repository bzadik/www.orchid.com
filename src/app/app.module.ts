import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhatIsOrchidComponent } from './what-is-orchid/what-is-orchid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WhyOrchidComponent } from './why-orchid/why-orchid.component';
import { DevResourcesComponent } from './dev-resources/dev-resources.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ServiceTermsComponent } from './service-terms/service-terms.component';
import { HomeComponent } from './home/home.component';
import { NewsletterSignupComponent } from './newsletter-signup/newsletter-signup.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    WhatIsOrchidComponent,
    WhyOrchidComponent,
    DevResourcesComponent,
    PrivacyPolicyComponent,
    ServiceTermsComponent,
    HomeComponent,
    NewsletterSignupComponent,
    PageLayoutComponent
  ],
  imports: [
    // TODO: how important is appId?
    BrowserModule.withServerTransition({appId: 'orchid-www'}),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
