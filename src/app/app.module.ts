import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMatExtSelectModule } from '@fgrid-ngx/mat-ext-select';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        FlexLayoutModule,
        NgxMatExtSelectModule,
        MatButtonToggleModule,
        FormsModule,
        ReactiveFormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
