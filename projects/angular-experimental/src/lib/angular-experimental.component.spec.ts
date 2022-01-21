import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularExperimentalComponent } from './angular-experimental.component';

describe('AngularExperimentalComponent', () => {
  let component: AngularExperimentalComponent;
  let fixture: ComponentFixture<AngularExperimentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularExperimentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularExperimentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
