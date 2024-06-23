import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrerislasIndexComponent } from './librerislas-index.component';

describe('LibrerislasIndexComponent', () => {
  let component: LibrerislasIndexComponent;
  let fixture: ComponentFixture<LibrerislasIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibrerislasIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrerislasIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
