import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AlertsModule} from 'angular-alert-module';
import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {MyTaskComponent } from './my-task/my-task.component';
import {FocusComponent } from './focus/focus.component';
import {HistoryComponent } from './history/history.component';
import {SettingsComponent } from './settings/settings.component';
import {LoginComponent } from './login/login.component';
import {LeafletModule } from '@asymmetrik/ngx-leaflet';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {DataTablesModule} from 'angular-datatables';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  { path: '', redirectTo: '/myTask', pathMatch: 'full' },
  { path: 'focus', component: FocusComponent },
  {path: 'myTask', component: MyTaskComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyTaskComponent,
    FocusComponent,
    HistoryComponent,
    SettingsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertsModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    LeafletModule,
    AngularFontAwesomeModule,
    DataTablesModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
