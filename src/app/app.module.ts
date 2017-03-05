import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { Dashboard } from './components/dashboard/component'
import { Customers } from './components/customers/component';
import { Items } from './components/items/component';
import { Sales } from './components/sales/component';
import { Employees } from './components/employees/component';
import { Settings } from './components/settings/component';

const appRoutes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'customers', component: Customers },
  { path: 'items', component: Items },
  { path: 'sales', component: Sales},
  { path: 'employees', component: Employees },
  { path: 'settings', component: Settings },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    Dashboard,
    Customers,
    Items,
    Sales,
    Employees,
    Settings
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
