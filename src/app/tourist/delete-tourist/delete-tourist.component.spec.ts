import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTouristComponent } from './delete-tourist.component';

describe('DeleteTouristComponent', () => {
  let component: DeleteTouristComponent;
  let fixture: ComponentFixture<DeleteTouristComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTouristComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTouristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
