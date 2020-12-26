import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizOneComponent } from './viz-one.component';

describe('VizOneComponent', () => {
  let component: VizOneComponent;
  let fixture: ComponentFixture<VizOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VizOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VizOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
