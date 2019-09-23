import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathChooserComponent } from './path-chooser.component';

describe('PathChooserComponent', () => {
  let component: PathChooserComponent;
  let fixture: ComponentFixture<PathChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
