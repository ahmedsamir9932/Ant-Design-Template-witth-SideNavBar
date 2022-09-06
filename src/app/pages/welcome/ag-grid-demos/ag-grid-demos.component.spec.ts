import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridDemosComponent } from './ag-grid-demos.component';

describe('AgGridDemosComponent', () => {
  let component: AgGridDemosComponent;
  let fixture: ComponentFixture<AgGridDemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridDemosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
