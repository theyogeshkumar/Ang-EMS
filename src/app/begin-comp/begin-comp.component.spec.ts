import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginCompComponent } from './begin-comp.component';

describe('BeginCompComponent', () => {
  let component: BeginCompComponent;
  let fixture: ComponentFixture<BeginCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
