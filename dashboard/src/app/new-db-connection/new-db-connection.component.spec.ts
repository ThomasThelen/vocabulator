import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDbConnectionComponent } from './new-db-connection.component';

describe('NewDbConnectionComponent', () => {
  let component: NewDbConnectionComponent;
  let fixture: ComponentFixture<NewDbConnectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDbConnectionComponent]
    });
    fixture = TestBed.createComponent(NewDbConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
