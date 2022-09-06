import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { AntDesignDemosComponent } from './ant-design-demos/ant-design-demos.component';
import { AgGridDemosComponent } from './ag-grid-demos/ag-grid-demos.component';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WelcomeRoutingModule, 
    NzStepsModule,
    NzMenuModule,
    NzButtonModule,
    NzDatePickerModule,
    NzAutocompleteModule,
    NzInputModule,
    NzInputNumberModule,
    AgGridModule
  ],
  declarations: [WelcomeComponent, AntDesignDemosComponent, AgGridDemosComponent],
  exports: [
    WelcomeComponent,
    NzStepsModule,
    NzMenuModule,
    NzButtonModule,
    NzDatePickerModule,
    NzInputModule,
    NzInputNumberModule,
    AgGridModule
  ]
})
export class WelcomeModule {}
