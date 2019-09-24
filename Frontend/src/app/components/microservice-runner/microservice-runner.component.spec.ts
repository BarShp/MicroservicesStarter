import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroserviceRunnerComponent } from './microservice-runner.component';

describe('MicroserviceRunnerComponent', () => {
  let component: MicroserviceRunnerComponent;
  let fixture: ComponentFixture<MicroserviceRunnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroserviceRunnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroserviceRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
