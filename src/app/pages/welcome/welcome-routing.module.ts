import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgGridDemosComponent } from './ag-grid-demos/ag-grid-demos.component';
import { AntDesignDemosComponent } from './ant-design-demos/ant-design-demos.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'ant-design', component: AntDesignDemosComponent },
  { path: 'ag-grid', component: AgGridDemosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
