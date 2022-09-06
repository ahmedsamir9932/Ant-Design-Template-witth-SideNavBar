import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntDesignDemosComponent } from './ant-design-demos.component';

describe('AntDesignDemosComponent', () => {
  let component: AntDesignDemosComponent;
  let fixture: ComponentFixture<AntDesignDemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntDesignDemosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntDesignDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
