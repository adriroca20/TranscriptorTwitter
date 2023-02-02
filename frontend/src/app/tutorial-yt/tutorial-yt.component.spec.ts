import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialYTComponent } from './tutorial-yt.component';

describe('TutorialYTComponent', () => {
  let component: TutorialYTComponent;
  let fixture: ComponentFixture<TutorialYTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialYTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialYTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
