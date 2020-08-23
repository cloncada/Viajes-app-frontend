import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTouristComponent } from './edit-tourist.component';

describe('EditTouristComponent', () => {
  let component: EditTouristComponent;
  let fixture: ComponentFixture<EditTouristComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTouristComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTouristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
