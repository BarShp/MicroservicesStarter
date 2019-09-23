import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroserviceCheckerComponent } from './microservice-checker.component';

describe('MicroserviceCheckerComponent', () => {
  let component: MicroserviceCheckerComponent;
  let fixture: ComponentFixture<MicroserviceCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroserviceCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroserviceCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
