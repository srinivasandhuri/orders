import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProdutsComponent } from './admin-produts.component';

describe('AdminProdutsComponent', () => {
  let component: AdminProdutsComponent;
  let fixture: ComponentFixture<AdminProdutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProdutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProdutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
