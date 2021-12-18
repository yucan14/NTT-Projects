import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailprofileComponent } from './detailprofile.component';

describe('DetailprofileComponent', () => {
  let component: DetailprofileComponent;
  let fixture: ComponentFixture<DetailprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
