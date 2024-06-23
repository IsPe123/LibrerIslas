import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrerislasAboutComponent } from './librerislas-about.component';

describe('LibrerislasAboutComponent', () => {
  let component: LibrerislasAboutComponent;
  let fixture: ComponentFixture<LibrerislasAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibrerislasAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrerislasAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
